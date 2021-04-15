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
    participant: {
      create(participant) {},
      update(participant) {},
      delete(participant) {}
    },
    judge: {
      create(judge) {},
      update(judge) {},
      delete(judge) {}
    },
    competitions: {
      update(competitions) {},
      create(competitions) {},
      delete(competitions) {}
    },
  };

  return { state, db };
}
