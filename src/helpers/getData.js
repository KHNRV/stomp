/**
 *
 * @data Global Object
 * @compId The Competition ID
 * @returns compCol: columns needed for the table &
 * compData: data needed for the table
 */
const getData = (data, compId) => {
  const scoring = { 0: "no", 1: "maybe", 2: "yes" };

  const competitiorsData = data.competitions[compId].participants;
  const judgesData = data.competitions[compId].judges;
  const scoresData = data.competitions[compId].scores;

  const compData = [];

  // BY DEFAULT THIS WILL BE SHOWN ON THE TABLE COLUMNS,
  // WETHER THERE IS DATA OR NOT
  const compCols = [
    { title: "ID", field: "participant_id", hidden: true },
    { title: "Bib #", field: "bib", editable: "never" },
    { title: "First Name", field: "first_name", editable: "never" },
    { title: "Last Name", field: "last_name", editable: "never" },
  ];

  // TO CREATE COLUMNS
  judgesData.forEach((judgeId) => {
    data.judges.forEach((judge) => {
      if (judge.id === judgeId) {
        compCols.push({
          title: `${judge.first_name} ${judge.last_name}`,
          field: `${judge.id}`,
          lookup: scoring,
        });
      }
    });
  });

  // TO CREATE DATA FOR EACH PARTICPANT NOT INCLUDING THE SCORE
  competitiorsData.forEach((participantId) => {
    data.participants.forEach((participant) => {
      if (participant.id === participantId) {
        compData.push({
          id: participant.id,
          bib: participant.bib,
          first_name: participant.first_name,
          last_name: participant.last_name,
        });
      }
    });
  });
  // console.log(compData);

  // ADD SCORES TO THE DATA
  scoresData.forEach((score) => {
    compData.forEach((participant) => {
      if (participant.id === score.participant_id) {
        participant[`j${score.judge_id}`] = score.value;
      }
    });
  });

  // console.log(compData);

  return [compData, compCols];
};

export default getData;
