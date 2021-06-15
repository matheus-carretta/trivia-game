export const apiTokenRequest = async () => {
  const fetchApi = await fetch(
    'https://opentdb.com/api_token.php?command=request',
  );

  const fetchData = await fetchApi.json();
  const { token } = await fetchData;
  return token;
};

export const apiQuestionsRequest = async (token) => {
  console.log(token);
  const fetchApi = await fetch(
    `https://opentdb.com/api.php?amount=5&token=${token}`,
  );

  const data = await fetchApi.json();
  console.log(data);
  return data.results;
};
