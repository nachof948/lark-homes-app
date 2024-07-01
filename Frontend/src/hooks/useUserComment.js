import { useEffect, useState } from 'react';
import * as api from '../api/index';

const useUserComments = (comments) => {
  const [commentsWithUserData, setCommentsWithUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const updatedComments = await Promise.all(
        comments?.map(async (comment) => {
          const userData = await api.getUser(comment.userRef);
          return {
            ...comment,
            userData: userData.data,
          };
        })
      );
      setCommentsWithUserData(updatedComments);
    };
    fetchUserData();
  }, [comments]);

  return commentsWithUserData;
};

export default useUserComments;
