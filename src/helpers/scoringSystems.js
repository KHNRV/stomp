export default function scoringSystems(state) {
  const _ = {
    competition(competition) {
      return _.store[competition.scoring_system_id].execute(competition);
    },
    name: {
      for: {
        competition(competition) {
          return _.store[competition.scoring_system_id].name;
        },
      },
    },
    options: {
      for: {
        competition(competition) {
          return _.store[competition.scoring_system_id].options(competition);
        },
      },
    },
    store: {
      1: {
        id: 1,
        name: "Yes / No / Maybe",
        options() {
          return { 0: "no", 1: "maybe", 2: "yes" };
        },
        execute(competition) {
          const scores = competition.scores;
          const results = {};

          competition.participants.forEach((participant_id) => {
            results[participant_id] = {
              participant_id,
              score: {
                yes: { majorities: 0 },
                no: { majorities: 0 },
                maybe: { majorities: 0 },
              },
            };
          });

          for (const score of scores) {
            const result = results[score.participant_id];

            switch (score.score) {
              case 0:
                result.score.no.majorities++;
                break;

              case 1:
                result.score.maybe.majorities++;
                break;

              case 2:
                result.score.yes.majorities++;
                break;
            }
          }

          return Object.values(results)
            .sort((prev, curr) => {
              return (
                (curr.score.maybe.majorities + curr.score.yes.majorities) - (prev.score.maybe.majorities + prev.score.yes.majorities) ||
                curr.score.yes.majorities - prev.score.yes.majorities ||
                prev.score.no.majorities - curr.score.no.majorities
              );
            })
            .map((result, index) => {
              const rank = index + 1;
              result.rank = rank;
              return result;
            });
        },
      },
      2: {
        id: 2,
        name: "Ranking",
        options(competition) {
          const options = {};

          competition.participants.forEach((participant, index) => {
            options[index + 1] = index + 1;
          });

          return options;
        },
        execute(competition) {
          const results = this.helpers.generateResults(competition);
          return this.helpers.rankResults(results, competition);
        },
        helpers: {
          generateResults(competition) {
            const results = competition.participants.map((participant_id) => ({
              participant_id,
              score: {},
            }));

            results.forEach((result) => {
              const participantScores = competition.scores
                .filter(
                  (score) => score.participant_id === result.participant_id
                )
                .map((score) => score.score);

              results.forEach((r, index) => {
                const run = index + 1;
                const majorities = participantScores.filter(
                  (score) => score <= run
                ).length;
                let score = participantScores.filter((score) => score <= run);

                if (score.length) {
                  score = score.reduce((prev, curr) => prev + curr);
                } else {
                  score = 0;
                }

                result.score[`1-${run}`] = { majorities, score };
              });
            });

            return results;
          },
          rankResults(results, competition) {
            const majority = Math.ceil(competition.judges.length / 2);

            const rankedResults = [];

            competition.participants.forEach((result, index) => {
              const run = index + 1;
              results = results.sort((prev, curr) => {
                return (
                  curr.score[`1-${run}`].majorities -
                    prev.score[`1-${run}`].majorities ||
                  prev.score[`1-${run}`].score - curr.score[`1-${run}`].score
                );
              });

              const selectedResults = results.filter(
                (result) => result.score[`1-${run}`].majorities >= majority
              );

              rankedResults.push(...results.splice(0, selectedResults.length));
            });

            return rankedResults.map((result, index) => {
              const rank = index + 1;
              result.rank = rank;
              return result;
            });
          },
        },
      },
    },
  };
  return _;
}
