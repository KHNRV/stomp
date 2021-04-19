import { useEffect, useState } from "react";
import axios from "axios";
import dataInterfaces from "../helpers/dataInterfaces";

export default function useApplicationData() {
  const [state, setState] = useState({
    event_code: "ilhc2019",
  });

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get(`/api/events/${state.event_code}`)),
      Promise.resolve(
        axios.get(`/api/events/${state.event_code}/participants`)
      ),
      Promise.resolve(axios.get(`/api/events/${state.event_code}/judges`)),
      Promise.resolve(
        axios.get(`/api/events/${state.event_code}/competitions`)
      ),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        ...all[0].data,
        participants: all[1].data,
        judges: all[2].data,
        competitions: all[3].data,
      }));
    });
  }, [state.event_code]);

  const db = {
    create: {
      participant(participant) {
        return axios
          .post(`/api/events/${state.event_code}/participants`, participant)
          .then((res) =>
            setState((prev) => ({ ...prev, participants: res.data }))
          );
      },
      judge(judge) {
        return axios
          .post(`/api/events/${state.event_code}/judges`, judge)
          .then((res) => setState((prev) => ({ ...prev, judges: res.data })));
      },
      competition(competition) {
        return axios
          .post(`/api/events/${state.event_code}/competitions`, competition)
          .then((res) =>
            setState((prev) => ({ ...prev, competitions: res.data }))
          );
      },
    },
    read: {},
    update: {
      participant(participant) {
        return axios
          .put(
            `/api/events/${state.event_code}/participants/${participant.id}`,
            participant
          )
          .then((res) =>
            setState((prev) => ({ ...prev, participants: res.data }))
          );
      },
      judge(judge) {
        return axios
          .put(`/api/events/${state.event_code}/judges/${judge.id}`, judge)
          .then((res) => setState((prev) => ({ ...prev, judges: res.data })));
      },
      competition(competition) {
        return axios
          .put(
            `/api/events/${state.event_code}/competitions/${competition.id}`,
            competition
          )
          .then((res) =>
            setState((prev) => ({ ...prev, competitions: res.data }))
          );
      },
    },
    destroy: {
      participant(participant) {
        return axios
          .delete(
            `/api/events/${state.event_code}/participants/${participant.id}`
          )
          .then((res) => {
            if (res.status === 200) {
              setState((prev) => ({ ...prev, participants: res.data }));
            } else {
              // throw new Error({
              //   status: "Error",
              //   message: "This participant could not be deleted",
              // });
            }
          });
      },
      judge(judge) {
        return axios
          .delete(`/api/events/${state.event_code}/judges/${judge.id}`)
          .then((res) => setState((prev) => ({ ...prev, judges: res.data })));
      },
      competition(competition) {
        return axios
          .delete(
            `/api/events/${state.event_code}/competitions/${competition.id}`
          )
          .then((res) =>
            setState((prev) => ({ ...prev, competitions: res.data }))
          );
      },
    },
  };

  return dataInterfaces(state, setState, db);
}
