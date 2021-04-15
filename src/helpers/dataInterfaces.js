export default function dataInterfaces() {
  return {
    read: {
      participants(state) {
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
      judges(state) {
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
      competition(state, competition_id) {},
      competitions(state) {
        const result = {
          columns: [
            { title: "id", field: "id", hidden: true },
            {
              title: "Competitions",
              field: "name",
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

        for (const { id, name, judges, participants } of state.competitions) {
          result.rows.push({
            id,
            name,
            judges: judges.length,
            participants: participants.length,
          });
        }

        return result
      },
      results(state) {},
    },
    write: {
      participant(formData) {},
      judge(formData) {},
      competition: {
        from: {
          createForm(formData) {
            //
          },
          registerForm(formData) {},
          scoresTable(tableData) {},
        },
      },
    },
  };
}
