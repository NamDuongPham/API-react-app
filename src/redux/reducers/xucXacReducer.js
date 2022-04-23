import { HANDLE_RESULT, PLAY_GAME } from "redux/constants/xucXacConstants";

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const dicePrototype = [
  {
    imgSrc: "./img/gameXucXac/1.png",
    diceNumber: 1,
  },
  {
    imgSrc: "./img/gameXucXac/2.png",
    diceNumber: 2,
  },
  {
    imgSrc: "./img/gameXucXac/3.png",
    diceNumber: 3,
  },
  {
    imgSrc: "./img/gameXucXac/4.png",
    diceNumber: 4,
  },

  {
    imgSrc: "./img/gameXucXac/5.png",
    diceNumber: 5,
  },
  {
    imgSrc: "./img/gameXucXac/6.png",
    diceNumber: 6,
  },
];
const initialState = {
  yourChoice: true, // true(tài).false(xỉu)
  amountWin: 0,
  amountPlay: 0,
  diceList: [
    {
      imgSrc: "./img/gameXucXac/1.png",
      diceNumber: 1,
    },
    {
      imgSrc: "./img/gameXucXac/2.png",
      diceNumber: 2,
    },
    {
      imgSrc: "./img/gameXucXac/3.png",
      diceNumber: 3,
    },
  ],
};

const xucXacReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CHOICE":
      state.yourChoice = action.payload;
      return { ...state };
    case PLAY_GAME:
      let newDiceList = [
        dicePrototype[getRandomArbitrary(0, 6)],
        dicePrototype[getRandomArbitrary(0, 6)],
        dicePrototype[getRandomArbitrary(0, 6)],
      ];
      state.diceList = newDiceList;
      // tính toán để show kết quả
      return { ...state };
    case HANDLE_RESULT:
      // TỔNG SỐ NÚT > 11 :TÀI
      // TỔNG SỐ NÚT <= 11 :TÀI
      state.amountPlay += 1;
      const totalDice = state.diceList.reduce(
        (total, dice) => (total += dice.diceNumber),
        0
      );
      let result;
      if (totalDice > 11) {
        result = true;
      } else {
        result = false;
      }
      if (result === state.yourChoice) {
        state.amountWin += 1;
      }
      return { ...state };
    default:
      return { ...state };
  }
};
export default xucXacReducer;
