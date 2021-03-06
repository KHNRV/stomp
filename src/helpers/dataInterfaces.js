import scoringSystems from "./scoringSystems";

export default function dataInterfaces(state, setState, db) {
  const _score = scoringSystems(state);
  const _ = {
    authenticate: {
      login() {},
      signup() {},
      logout() {
        // setState({});
      },
      isLoggedIn() {
        return state.event_name ? true : false;
      },
    },
    read: {
      state,
      scoring: {
        list() {
          return Object.values(_score.store).map(({ id, name }) => ({
            id,
            name,
          }));
        },
      },
      participants: {
        all() {
          return state.participants;
        },
        where: {
          ids(ids) {
            return state.participants.filter((participant) =>
              ids.includes(participant.id)
            );
          },
        },
        for: {
          dashboard() {
            return {
              columns: [
                { title: "id", field: "id", hidden: true },
                { title: "Bib #", field: "bib" },
                { title: "First Name", field: "first_name" },
                { title: "Last Name", field: "last_name" },
                { title: "Email", field: "email" },
                { title: "Phone", field: "phone" },
              ],
              rows: [...state.participants],
            };
          },
        },
      },
      judges: {
        all() {
          return state.judges;
        },
        where: {
          ids(ids) {
            return state.judges.filter((judge) => ids.includes(judge.id));
          },
        },
        for: {
          dashboard() {
            return {
              columns: [
                { title: "id", field: "id", hidden: true },
                { title: "First Name", field: "first_name" },
                { title: "Last Name", field: "last_name" },
                { title: "Email", field: "email" },
                { title: "Phone", field: "phone" },
              ],
              rows: [...state.judges],
            };
          },
        },
      },

      competitions: {
        where: {
          id(id) {
            return state.competitions.find(
              (competition) => competition.id === id
            );
          },
        },
        for: {
          scoresTable(competition_id) {
            const result = {
              columns: [
                { title: "id", field: "id", hidden: true },
                {
                  title: "Bib #",
                  field: "bib",
                  editable: "never",
                  defaultSort: "asc",
                },
                { title: "First Name", field: "first_name", editable: "never" },
                { title: "Last Name", field: "last_name", editable: "never" },
              ],
              rows: [],
            };

            const competition = state.competitions.find(
              (competition) => competition.id === competition_id
            );

            for (const id of competition.judges) {
              const judge = state.judges.find((judge) => judge.id === id);
              result.columns.push({
                title: `${judge.first_name} ${judge.last_name}`,
                field: `${judge.id}`,
                lookup: _score.options.for.competition(competition), //TODO: Implement
              });
            }

            for (const id of competition.participants) {
              const participant = state.participants.find(
                (participant) => participant.id === id
              );

              const scores = {};

              for (const score of competition.scores.filter(
                (score) => score.participant_id === id
              )) {
                scores[score.judge_id] = score.score;
              }

              result.rows.push({
                id: participant.id,
                bib: participant.bib,
                first_name: participant.first_name,
                last_name: participant.last_name,
                ...scores,
              });
            }

            return result;
          },
          competitionsTable() {
            const result = {
              columns: [
                { title: "id", field: "id", hidden: true },
                {
                  title: "Competitions",
                  field: "name",
                },
                {
                  title: "Scoring System",
                  field: "scoring_system",
                },
                {
                  title: "Judges",
                  field: "judges",
                  type: "numeric",
                  align: "center",
                },
                {
                  title: "Participants",
                  field: "participants",
                  type: "numeric",
                  align: "center",
                },
              ],
              rows: [],
            };

            for (const {
              id,
              name,
              judges,
              participants,
              scoring_system_id,
            } of state.competitions) {
              result.rows.push({
                id,
                name,
                judges: judges.length,
                participants: participants.length,
                scoring_system: _score.name.for.competition({
                  scoring_system_id,
                }),
              });
            }

            return result;
          },
          registerForm(competition_id) {
            const competition = state.competitions.find(
              (competition) => competition.id === competition_id
            );

            return {
              participant_ids: competition.participants,
              judge_ids: competition.judges,
            };
          },
          resultsTable(competition_id) {
            const competition = _.read.competitions.where.id(competition_id);
            const results = _score.competition(competition);
            const table = {
              columns: [
                { title: "ID", field: "id", hidden: true },
                {
                  title: "Bib #",
                  field: "bib",
                  editable: "never",
                },
                { title: "First Name", field: "first_name", editable: "never" },
                { title: "Last Name", field: "last_name", editable: "never" },
              ],
              rows: [],
            };

            if (!results.length) {
              return table;
            }

            table.columns.push(
              ...Object.keys(results[0].score).map((key) => {
                return {
                  title: key.toUpperCase(),
                  field: key,
                  editable: "never",
                };
              })
            );

            for (const id of competition.participants) {
              const participant = state.participants.find(
                (participant) => participant.id === id
              );

              const result = results.find(
                ({ participant_id }) => participant_id === id
              );
              const score = {};
              for (const [key, value] of Object.entries(result.score)) {
                score[key] = value.majorities;
              }

              table.rows.push({
                id: participant.id,
                rank: result.rank,
                bib: participant.bib,
                first_name: participant.first_name,
                last_name: participant.last_name,
                ...score,
              });
            }

            table.columns.push({
              title: "RANK",
              field: "rank",
              editable: "never",
              defaultSort: "asc",
              align: "center",
              cellStyle: {
                backgroundColor: "#ededed",
                fontWeight: "bolder",
              },
            });

            return table;
          },
        },
        where: {
          id(id) {
            return state.competitions.find(
              (competition) => competition.id === id
            );
          },
        },
      },
    },
    create: {
      participant(participant) {
        return db.create.participant(participant);
      },
      judge(judge) {
        return db.create.judge(judge);
      },
      competition(competition) {
        return db.create.competition(competition);
      },
    },
    update: {
      competition(id) {
        return {
          from: {
            registerForm(competition) {
              return db.update.competition(competition);
            },
            scoresTable(tableData) {
              const competition = { ..._.read.competitions.where.id(id) };
              competition.scores = competition.scores.map((score) => {
                const row = tableData.rows.find(
                  (row) => row.id === score.participant_id
                );
                score.score = parseInt(row[score.judge_id.toString()]);
                return score;
              });

              return db.update.competition(competition);
            },
          },
        };
      },
    },
    destroy: {
      participant(participant) {
        return db.destroy.participant(participant);
      },
      judge(judge) {
        return db.destroy.judge(judge);
      },
      competition(competition) {
        return db.destroy.competition(competition);
      },
    },
  };
  return _;
}
