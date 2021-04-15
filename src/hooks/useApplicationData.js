import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    event_code: "csc2020",
    participants: [],
    judges: [],
    competitions: [],
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
      console.log(all);
      setState((prev) => ({
        ...prev,
        ...all[0].data,
        participants: all[1].data,
        judges: all[2].data,
        competitions: all[3].data,
      }));
    });
  }, []);

  const db = {
    participants: {
      create(participant) {
        return axios
          .post(`/api/events/${state.event_code}/participants`, participant)
          .then((res) =>
            setState((prev) => ({ ...prev, participants: res.data }))
          );
      },
      update(participant) {
        return axios
          .put(
            `/api/events/${state.event_code}/participants/${participant.id}`,
            participant
          )
          .then((res) =>
            setState((prev) => ({ ...prev, participants: res.data }))
          );
      },
      delete(participant) {
        return axios
          .delete(
            `/api/events/${state.event_code}/participants/${participant.id}`
          )
          .then((res) =>
            setState((prev) => ({ ...prev, participants: res.data }))
          );
      },
    },
    judges: {
      create(judge) {
        return axios
          .post(`/api/events/${state.event_code}/judges`, judge)
          .then((res) => setState((prev) => ({ ...prev, judges: res.data })));
      },
      update(judge) {
        return axios
          .put(`/api/events/${state.event_code}/judges/${judge.id}`, judge)
          .then((res) => setState((prev) => ({ ...prev, judges: res.data })));
      },
      delete(judge) {
        return axios
          .delete(`/api/events/${state.event_code}/judges/${judge.id}`)
          .then((res) => setState((prev) => ({ ...prev, judges: res.data })));
      },
    },
    competitions: {
      create(competition) {
        return axios
          .post(`/api/events/${state.event_code}/competitions`, competition)
          .then((res) =>
            setState((prev) => ({ ...prev, competitions: res.data }))
          );
      },
      update(competition) {
        return axios
          .put(
            `/api/events/${state.event_code}/competitions/${competition.id}`,
            competition
          )
          .then((res) =>
            setState((prev) => ({ ...prev, competitions: res.data }))
          );
      },
      delete(competition) {
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

  return { state, db };
}
