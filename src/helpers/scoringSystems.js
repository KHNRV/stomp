export default function scoringSystems(state) {
  const _ = {
    competition(competition) {
      return _.store[competition.scoring_system_id].execute(competition);
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
        name: "Relative Placement - Yes / No / Maybe",
        options() {
          return { 0: "no", 1: "maybe", 2: "yes" };
        },
        execute(competition) {
          const scores = competition.scores;
          const results = {};

          competition.participants.forEach((participant_id) => {
            results[participant_id] = {
              participant_id,
              score: { yes: 0, no: 0, maybe: 0 },
            };
          });

          for (const score of scores) {
            const result = results[score.participant_id];

            switch (score.score) {
              case 0:
                result.score.no++;
                break;

              case 1:
                result.score.maybe++;
                break;

              case 2:
                result.score.yes++;
                break;
            }
          }

          return Object.values(results)
            .sort((prev, curr) => {
              return (
                curr.score.yes - prev.score.yes ||
                curr.score.maybe - prev.score.maybe ||
                prev.score.maybe - curr.score.maybe
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
        name: "Relative Placement - Ranking",
        options(competition) {
          const options = {};

          competition.participants.forEach((participant, index) => {
            options[index + 1] = index + 1;
          });

          return options;
        },
        execute(competition) {},
      },
    },
  };
  return _;
}
