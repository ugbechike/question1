import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setUserListAction } from "../redux/users/set-user-list-action";


const API_URL =
  'https://gist.githubusercontent.com/dsandin/c8ed6c5a9486f311f4725f221b912220/raw/8c6d2d8e1f339d02e0ff3d2990560a4862c4beae/users_page_list';

export const UseListUsers = ({page}: {page?: string}) => {
    const [status, setStatus] = useState<"loading" | "error" | "resolved">(
        "loading"
      );
    const [input, setInput] = useState({page});
    const dispatch = useDispatch();
    const fetchData = () => {
        axios
        .get(API_URL)
        .then(({data}: any) => {
          Promise.all(
            data.pages.map((page: any) => {
              axios.get(page).then(({data}) => {
                setStatus('resolved');
                dispatch(setUserListAction(data));
              });
            }),
          );
        })
        .catch(err => {
          setStatus('error');
          dispatch(setUserListAction([]));
        });
    }

    useEffect(() => {
        fetchData();
      return () => {};
    }, [input]);


    return {
      status,
      fetchData,
      setInput
    };

}