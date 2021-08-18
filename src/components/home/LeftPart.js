import "./style.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PermIdentity, Code, ContactSupport } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    "&:hover": {
      color: "rgba(115, 255, 243, 0.80)",
    },
  },
}));

export const LeftPart = ({ showRight, setShowRight }) => {
  const classes = useStyles();

  const hanldeBtns = (e) => {
    const newShowRight = { ...showRight };
    const text = e.target.innerText;
    for (const [key, value] of Object.entries(showRight)) {
      newShowRight[key] = key === text;
    }
    setShowRight(newShowRight);
  };
  return (
    <>
      <section className="aboutMe__left aboutMe__intro">
        <h1 className="intro__greetting">Hello there! My name is</h1>
        <h1 className="intro__name">Alvin Chen</h1>
        <p className="intro__brief">
          A web developer who is curious about new Tech and care about user
          experiences.
        </p>

        <div className="intro__btns">
          <Button
            variant="outlined"
            color="inherit"
            value="aboutMe"
            className={classes.button}
            startIcon={<PermIdentity />}
            onClick={hanldeBtns}
          >
            about me
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            value="skills"
            className={classes.button}
            startIcon={<Code />}
            onClick={hanldeBtns}
          >
            skill set
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            value="contact"
            className={classes.button}
            startIcon={<ContactSupport />}
            onClick={hanldeBtns}
          >
            contact
          </Button>
        </div>
      </section>
    </>
  );
};
