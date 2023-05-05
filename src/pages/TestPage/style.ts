import styled from "styled-components";

export const TestMain = styled.main`
  display: flex;
  margin: 0 auto;
  height: 90vh;
  align-items: center;
  justify-content: center;

  .controlerContent {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .btn_controller {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    width: 100%;

    button {
      width: 162px;
      height: 33px;
      font-weight: 700;
      font-size: 20px;
      background: var(--color-primary-1);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 7px;
      padding: 0 10px;
      color: white;
      text-transform: uppercase;
    }

    button:hover {
      background: var(--color-primary-2);
    }
  }

  .card-question {
    background-color: var(--grey-1);
    width: 278px;
    height: 325px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    padding: 0 20px;
    border: solid 1px var(--grey-2);
  }

  .controlerMain {
    background-color: var(--grey-0);
    border-radius: 8px;
    width: auto;
    height: auto;
    display: flex;
    margin: 0px auto;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    padding: 50px;
  }

  .divisionContent {
    display: flex;
    gap: 1rem;
    box-sizing: border-box;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 325px;
    padding-top: 25%;

    .btn-response {
      width: auto;
      height: 41px;
      padding: 0 20px;
      border-radius: 7px;
      background-color: var(--grey-2);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      text-transform: uppercase;
      font-weight: 700;
      font-size: 24px;
      margin-top: 10px;
      border: solid 1px var(--grey-2);
    }

    .btn-response:hover {
      background: white;
    }

    p {
      font-size: 24px;
      font-weight: 700;
    }
  }

  .ControlerResposta {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    border-bottom: solid 1px var(--grey-2);
    padding-bottom: 5px;

    input {
      border: none;
      width: auto;
      height: 41px;
      background-color: var(--grey-0);
      font-weight: 700;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
    }

    input:focus {
      background: var(--grey-1);
      border-radius: 2px;
    }

    button {
      width: 113px;
      height: 41px;
      text-transform: uppercase;
      background: var(--color-primary-1);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 7px;
      color: white;
      font-weight: 700;
      font-size: 20px;
    }

    button:hover {
      background: var(--color-primary-2);
    }
  }

  .page {
    display: flex;
  }

  .count {
    font-weight: 700;
    font-size: 32px;
    margin-top: 30px;
  }

  @media (max-width: 600px) {
    .controlerContent {
      button {
        font-size: 1rem;
        width: auto;
        height: auto;
        padding: 5px 10px;
      }
    }

    .controlerMain {
      width: auto;
      height: auto;
      padding: 20px;
    }

    .divisionContent {
      height: auto;
      width: auto;
      margin: 0;
      flex-direction: column;
    }

    .card-question {
      width: 177px;
      height: 120px;
      margin: auto;
      font-size: 1rem;
      font-weight: 600;
      line-height: 115%;
    }

    .divisionContent > section {
      height: auto;
      width: auto;
    }

    form {
      height: auto;
      width: auto;
      padding: 0;
      margin: 30px 0;

      p {
        margin-top: 10px;
        font-size: 1rem;
      }

      .btn-response {
        width: auto;
        padding: 5px;
        font-size: 1rem;
      }
    }

    .ControlerResposta {
      padding-bottom: 5px;
      width: auto;
      height: auto;

      input {
        width: auto;
        height: auto;
        font-size: 1rem;
      }

      button {
        width: auto;
        padding: 0 5px;
        font-size: 1rem;
        font-size: 1rem;
        width: auto;
        height: auto;
        padding: 2px 10px;
      }
    }

    .count {
      font-size: 1rem;
    }
  }
`;
