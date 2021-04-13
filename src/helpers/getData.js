/**
 *
 * @data Global Object
 * @compId The Competition ID
 * @returns compCol: columns needed for the table &
 * compData: data needed for the table
 */
const getData = (data, compId) => {
  const scoring = { 0: "no", 1: "maybe", 2: "yes" };

  const _competitors = data.competitions[compId].participants;
  const _judges = data.competitions[compId].judges;
  const _scores = data.competitions[compId].scores;

  const compData = [];

  const compCols = [
    { title: "ID", field: "participant_id", hidden: true },
    { title: "Bib #", field: "bib" },
    { title: "First Name", field: "first_name" },
    { title: "Last Name", field: "last_name" },
  ];

  // TO CREATE COLUMNS
  _judges.forEach((judgeId) => {
    data.judges.forEach((judge) => {
      if (judge.id === judgeId) {
        compCols.push({
          title: `${judge.first_name} ${judge.last_name}`,
          field: `j${judge.id}`,
          lookup: scoring,
        });
        console.log(judge.first_name);
      }
    });
  });
  // console.log(compCols)

  // TO CREATE DATA FOR EACH PARTICPANT NOT INCLUDING THE SCORE
  _competitors.forEach((participantId) => {
    data.participants.forEach((participant) => {
      if (participant.id === participantId) {
        compData.push({
          id: participant.id,
          bib: participant.bib,
          first_name: participant.first_name,
          last_name: participant.last_name,
        });
        console.log(participant.first_name);
      }
    });
  });
  console.log(compData);
  console.log(_scores);

  // Add Scores
  _scores.forEach((score) => {
    compData.forEach((participant) => {
      if (participant.id === score.participant_id) {
        participant[`j${score.judge_id}`] = score.value;
      }
    });
  });

  console.log(compData);

  return [compData, compCols];
};

export default getData;
