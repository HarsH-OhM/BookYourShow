import React, { useState, useContext } from "react";
import "./styles.css";
import "./index.css";
import Dropdown from "./Components/Dropdown";
import Select from "react-select";
import Modal from "./Components/Modal";
import ShowContext from "./Components/showContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuPaper: {
    maxHeight: 120,
  },
}));

const InputForm = (props) => {
  const classes = useStyles();
  const [show, setShow] = useState({});
  const [seats, setSeats] = useState();

  const { s1Data, setS1Data, s2Data, setS2Data, s3Data, setS3Data } =
    useContext(ShowContext);

  const [modal, setModal] = useState(false);
  const Toggle = () => {
    setModal(!modal);
    setShow({});
    setSeats([]);
  };

  const [isDrop1Valid, setIsDrop1Valid] = useState(false);
  const [isDrop2Valid, setIsDrop2Valid] = useState(false);

  const [submitMessage, setSubmitMessage] = useState([
    { messageType: "", message: "" },
  ]);
  const [pricing, setPricing] = useState([]);
  const [updatedSeats1Data, setUpdatedSeats1Data] = useState();
  const [updatedSeats2Data, setUpdatedSeats2Data] = useState();
  const [updatedSeats3Data, setUpdatedSeats3Data] = useState();

  // const { show1Seats, show2Seats, show3Seats } = props;

  const handleYesClick = () => {
    if (submitMessage.messageType == "Success!") {
      setS1Data(updatedSeats1Data);
      setS2Data(updatedSeats2Data);
      setS3Data(updatedSeats3Data);
      Toggle();
    } else {
      setModal(!modal);
    }
  };

  const handleChange = (event, dropType) => {
    // const label = event.label;
    // const value = event.value;

    if (dropType == "show") {
      setShow(event);
      if (Object.keys(event).length > 0) {
        setIsDrop1Valid(true);
      } else {
        setIsDrop1Valid(false);
      }
      // setShow(values => ({ ...values, [label]: value }));
    } else {
      setSeats(event);
      if (Object.keys(event).length > 0) {
        setIsDrop2Valid(true);
      } else {
        setIsDrop2Valid(false);
      }
    }
  };

  const upadateOldSeatsData = (
    seatsData,
    onlyBookedSeatsArr,
    removeOldData,
    SeatType,
    showNumber
  ) => {
    let toUpdateData = onlyBookedSeatsArr.map((el) => {
      return {
        name: el.at(0).name,
        value: false,
        price: el.at(0).price,
      };
    });

    const toFindDuplicates = (arry) =>
      arry.filter((item, index) => arry.indexOf(item) !== index);

    let oldSeatsData = toFindDuplicates(removeOldData);

    let finalData = [...oldSeatsData, ...toUpdateData];

    let finalSortedData = finalData.sort((a, b) => {
      return a.name.localeCompare(b.name, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });

    return finalSortedData;

    // updatedPlatinumData = {
    //   Platinum: finalSortedData,
    //   Gold: seatsData.Gold,
    //   Silver: seatsData.Silver,
    // };

    // if (SeatType === "Platinum") {
    //   updatedPlatinumData = finalSortedData;
    //   if (showNumber == "1") {
    //     updatedS1Data = {
    //       Platinum: updatedPlatinumData,
    //       Gold: s1Data.Gold,
    //       Silver: s1Data.Silver,
    //     };
    //   }
    //   if (showNumber == "2") {
    //     updatedS2Data = {
    //       Platinum: updatedPlatinumData,
    //       Gold: s2Data.Gold,
    //       Silver: s2Data.Silver,
    //     };
    //   }
    //   if (showNumber == "3") {
    //     updatedS3Data = {
    //       Platinum: updatedPlatinumData,
    //       Gold: s3Data.Gold,
    //       Silver: s3Data.Silver,
    //     };
    //   }
    // }
    // if (SeatType === "Gold") {
    //   updatedGoldData = finalSortedData;
    //   if (showNumber == "1") {
    //     updatedS1Data = {
    //       Platinum: s1Data.Platinum,
    //       Gold: updatedGoldData,
    //       Silver: s1Data.Silver,
    //     };
    //   }
    //   if (showNumber == "2") {
    //     updatedS2Data = {
    //       Platinum: s2Data.Platinum,
    //       Gold: updatedGoldData,
    //       Silver: s2Data.Silver,
    //     };
    //   }
    //   if (showNumber == "3") {
    //     updatedS3Data = {
    //       Platinum: s3Data.Platinum,
    //       Gold: updatedGoldData,
    //       Silver: s3Data.Silver,
    //     };
    //   }
    // }
    // if (SeatType === "Silver") {
    //   updatedSilverData = finalSortedData;
    //   if (showNumber == "1") {
    //     updatedS1Data = {
    //       Platinum: s1Data.Platinum,
    //       Gold: s1Data.Gold,
    //       Silver: updatedSilverData,
    //     };
    //   }
    //   if (showNumber == "2") {
    //     updatedS2Data = {
    //       Platinum: s2Data.Platinum,
    //       Gold: s2Data.Gold,
    //       Silver: updatedSilverData,
    //     };
    //   }
    //   if (showNumber == "3") {
    //     updatedS3Data = {
    //       Platinum: s3Data.Platinum,
    //       Gold: s3Data.Gold,
    //       Silver: updatedSilverData,
    //     };
    //   }
    // }

    // console.log(updatedS1Data, updatedS2Data, updatedS3Data, "finaldata11s");
  };

  const checkAndResponse = (selectedSeatsData, seatsData, showNo) => {
    let checkSeatsArr = [];
    let bookedSeatsArr = [];
    let removeOldData = [];
    let goldPrice = [];
    let platinumPrice = [];
    let silverPrice = [];
    let subTotal = [];
    let platinumPriceCount = 0;
    let goldPriceCount = 0;
    let silverPriceCount = 0;
    let updatedPlatinumData = [];
    let updatedGoldData = [];
    let updatedSilverData = [];
    for (let el of selectedSeatsData) {
      if (el.startsWith("A")) {
        checkSeatsArr = seatsData.Platinum.filter((item) => item.name == el);

        platinumPrice.push(checkSeatsArr.at(0).price || 0);
        platinumPriceCount = platinumPrice.reduce((a, b) => a + b);
        bookedSeatsArr.push(checkSeatsArr);

        if (checkSeatsArr.at(0).value) {
          let bookedData = seatsData.Platinum.filter(
            (item) => item.name !== el
          );

          removeOldData.push(bookedData);

          removeOldData = removeOldData.flat();

          updatedPlatinumData = upadateOldSeatsData(
            seatsData.Platinum,
            bookedSeatsArr,
            removeOldData,
            "Platinum",
            showNo
          );

          if (showNo == "1") {
            setUpdatedSeats1Data({
              Platinum: updatedPlatinumData,
              Gold: s1Data.Gold,
              Silver: s1Data.Silver,
            });
          } else if (showNo == "2") {
            setUpdatedSeats2Data({
              Platinum: updatedPlatinumData,
              Gold: s2Data.Gold,
              Silver: s2Data.Silver,
            });
          } else if (showNo == "3") {
            setUpdatedSeats1Data({
              Platinum: updatedPlatinumData,
              Gold: s3Data.Gold,
              Silver: s3Data.Silver,
            });
          }
        }
      } else if (el.startsWith("B")) {
        checkSeatsArr = seatsData.Gold.filter((item) => item.name == el);
        goldPrice.push(checkSeatsArr.at(0).price || 0);
        goldPriceCount = goldPrice.reduce((a, b) => a + b);
        bookedSeatsArr.push(checkSeatsArr);
        if (checkSeatsArr.at(0).value) {
          let bookedData = seatsData.Gold.filter((item) => item.name !== el);

          removeOldData.push(bookedData);

          removeOldData = removeOldData.flat();

          updatedGoldData = upadateOldSeatsData(
            seatsData.Gold,
            bookedSeatsArr,
            removeOldData,
            "Gold",
            showNo
          );

          if (showNo === "1") {
            setUpdatedSeats1Data({
              Platinum: s1Data.Platinum,
              Gold: updatedGoldData,
              Silver: s1Data.Silver,
            });
          } else if (showNo === "2") {
            setUpdatedSeats2Data({
              Platinum: s2Data.Platinum,
              Gold: updatedGoldData,
              Silver: s2Data.Silver,
            });
          } else if (showNo === "3") {
            setUpdatedSeats3Data({
              Platinum: s3Data.Platinum,
              Gold: updatedGoldData,
              Silver: s3Data.Silver,
            });
          }
        }
      } else if (el.startsWith("C")) {
        checkSeatsArr = seatsData.Silver.filter((item) => item.name == el);
        silverPrice.push(checkSeatsArr.at(0).price || 0);
        silverPriceCount = silverPrice.reduce((a, b) => a + b);
        bookedSeatsArr.push(checkSeatsArr);
        if (checkSeatsArr.at(0).value) {
          let bookedData = seatsData.Silver.filter((item) => item.name !== el);

          removeOldData.push(bookedData);

          removeOldData = removeOldData.flat();

          updatedSilverData = upadateOldSeatsData(
            seatsData.Silver,
            bookedSeatsArr,
            removeOldData,
            "Silver",
            showNo
          );

          if (showNo === "1") {
            setUpdatedSeats1Data({
              Platinum: s1Data.Platinum,
              Gold: s1Data.Gold,
              Silver: updatedSilverData,
            });
          } else if (showNo === "2") {
            setUpdatedSeats2Data({
              Platinum: s2Data.Platinum,
              Gold: s2Data.Gold,
              Silver: updatedSilverData,
            });
          } else if (showNo === "3") {
            setUpdatedSeats3Data({
              Platinum: s3Data.Platinum,
              Gold: s3Data.Gold,
              Silver: updatedSilverData,
            });
          }
        }
      }

      subTotal = platinumPriceCount + goldPriceCount + silverPriceCount;

      if (checkSeatsArr.at(0).value) {
        setSubmitMessage([
          {
            messageType: "Success!",
            message: `Successfully Booked - Show ${showNo}`,
          },
        ]);

        setPricing(subTotal);

        //restTheSeatVAlue
      } else {
        // bookedSeatsArr = bookedSeatsArr.push(checkSeatsArr.at(0).name);

        setSubmitMessage([
          {
            messageType: "Please Try again!",
            message: `Seat no. ${
              checkSeatsArr.at(0).name
            } is already booked, Please select different seats.`,
          },
        ]);
      }
    }

    Toggle();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (show.value === "S1") {
      let seatValues = seats.map((el) => el.value);

      checkAndResponse(seatValues, s1Data, "1");
    }
    if (show.value === "S2") {
      let seatValues = seats.map((el) => el.value);

      checkAndResponse(seatValues, s2Data, "2");
    }
    if (show.value === "S3") {
      let seatValues = seats.map((el) => el.value);

      checkAndResponse(seatValues, s3Data, "3");
    }
  };

  const options = [
    { value: "S1", label: "Show 1" },
    { value: "S2", label: "Show 2" },
    { value: "S3", label: "Show 3" },
  ];

  const getDrop2Options = () => {
    let myArr = [];
    for (let i = 1; i < 10; i++) {
      let obj = {};

      myArr.push({ value: `A${i}`, label: `A${i}` });
      myArr.push({ value: `B${i}`, label: `B${i}` });
      myArr.push({ value: `C${i}`, label: `C${i}` });
    }

    return myArr;
  };

  const seatsOptions = getDrop2Options();

  return (
    <>
      <form className="formDiv">
        <label>Select Show No.</label>

        <Select
          options={options}
          value={show}
          onChange={(e) => handleChange(e, "show")}
        />

        <br />
        <label>Select Seats</label>
        <Select
          options={seatsOptions}
          isMulti
          className="basic-multi-select"
          MenuProps={{ classes: { paper: classes.menuPaper } }}
          value={seats}
          onChange={(e) => handleChange(e, "seats")}
        />

        <br />

        {!isDrop1Valid || !isDrop2Valid ? (
          <button type="submit" className="formSubmit">
            Submit
          </button>
        ) : (
          <button
            type="submit"
            className="formSubmit"
            style={{
              backgroundColor: "teal",
              color: "white",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </form>

      <p>
        {(!isDrop1Valid || !isDrop2Valid) &&
          "Please Select all the Input field"}
      </p>

      <Modal
        show={modal}
        title={submitMessage.at(0).messageType || ""}
        sMessage={submitMessage.at(0).message || ""}
        price={pricing || 0}
        close={Toggle}
        yesClick={handleYesClick}
      />
    </>
  );
};

export default InputForm;
