const sendData = (data, columns) => {
  const result = {
    id: 1,
    name: "Open Solo Jazz - Prelims",
    scoring_system_id: 1,
    competitors: [
      /*Populated*/
    ],
    judges: [
      /*Populated*/
    ],
    scores: [
      /*Populated*/
    ],
  };

  let judgeArr = columns.slice(4);
  judgeArr.forEach((j) => {
    result.judges.push(parseInt(j.field));
  });

  data.forEach((e) => {
    result.competitors.push(parseInt(e.id));
    const participantId = e.id;

    delete e["id"];
    delete e["bib"];
    delete e["first_name"];
    delete e["last_name"];

    const jIds = Object.keys(e);
    const jScores = Object.values(e);

    for (let i = 0; i < jIds.length - 1; i++) {
      result.scores.push({
        participant_id: participantId,
        judge_id: parseInt(jIds[i]),
        value: parseInt(jScores[i]),
      });
    }
  });
  return result;
};

export default sendData;
