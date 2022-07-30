const callback = (func) => {
  const result = func(2);
  console.log(result);
};

const func = (num) => {
  return num * 2;
};

const func2 = (num) => {
  return num * 4;
};

callback();
