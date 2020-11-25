import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../src/context/Auth";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormGroup from "@material-ui/core/FormGroup";
import useInput from "./hooks/useInput";

function Checklist(props) {
  const { userToken } = useContext(AuthContext);
  const [checklists, setChecklist] = useState([]);
  const [
    newChecklist,
    setNewChecklist,
    overideChecklist,
    resetChecklist,
  ] = useInput("");

  const getUser = async function () {
    axios
      .get(`http://18.139.50.74:8080/checklist`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        let checklistData = res.data.data;
        setChecklist(checklistData);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://18.139.50.74:8080/checklist/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        console.log(res)
        setChecklist(checklists.filter((el) => el.id !== id));
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    axios
      .post(
        `http://18.139.50.74:8080/checklist`,
        {
          name: newChecklist,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        props.history.push('/')
        resetChecklist()
        // res.data.status === 1 ? setStatus(true) : setStatus(false);
      });
  };

  const renderChecklist = () => {
    return (
      <div>
        {checklists.map((checklist) => (
          <>
            <li key={checklist.id} id={checklist.id}>
              {checklist.name}{" "}
              <button onClick={() => handleDelete(checklist.id)}>delete</button>
            </li>
          </>
        ))}
      </div>
    );
  };

  return (
    <>
      <Grid container direction="column" justify="flex-start">
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl variant="outlined">
              <InputLabel required>Create</InputLabel>
              <Input
                type="text"
                label="New Checklist"
                value={newChecklist}
                onChange={setNewChecklist}
                required
              />
            </FormControl>
          </FormGroup>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            type="submit"
          >
            CREATE
          </Button>
        </form>

        <ul>{renderChecklist()}</ul>
      </Grid>
    </>
  );
}

export default withRouter(Checklist);
