export const apiTokenRequest = async () => {
  const fetchApi = await fetch(
    'https://opentdb.com/api_token.php?command=request',
  );

  const fetchData = await fetchApi.json();
  const { token } = await fetchData;
  return token;
};

export const apiQuestionsRequest = async (token, settings) => {
  const { category, difficult, type } = settings;
  // https://opentdb.com/api.php?amount=5&category=9&difficulty=hard&type=multiple
  const fetchApi = await fetch(
    //  `https://opentdb.com/api.php?amount=5&token=${token}`,
    `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficult}&type=${type}&token=${token}`,
  );

  const data = await fetchApi.json();
  return data.results;
};
