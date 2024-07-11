import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import SkillBar from "react-skillbars";
import { addSkill, fetchSkills } from "../../features/skills/skillsSlice";
import styles from "./Skills.module.scss";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colors = {
  bar: "#26C17E",
  title: {
    text: "#fff",
    background: "#26C17E",
  },
};

const Skills = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.list);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      type: "",
      level: "",
    },
    validationSchema: Yup.object({
      type: Yup.string().required("Skill name is a required field"),
      level: Yup.number()
        .typeError("Skill range must be a 'number' type")
        .required("Skill range is a required field")
        .min(10, "Skill range must be greater than or equal to 10")
        .max(100, "Skill range must be less than or equal to 100"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addSkill(values));
      resetForm();
      setShowForm(false);
    },
  });

  const formattedSkills = skills.map((skill) => ({
    type: skill.type,
    level: skill.level,
  }));

  return (
    <div className={styles.skills}>
      <div className={styles.skills_wrapper}>
        <h2>Skills</h2>
        <button
          className={styles.editButton}
          onClick={() => setShowForm(!showForm)}
        >
            <FontAwesomeIcon icon={faPenToSquare} />
          {showForm ? "Close Form" : "Open Edit"}
        </button>
      </div>
      {showForm && (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.skills_form__input}>
            <label htmlFor="type">Skill Name:</label>
            <div className={styles.skills_input__wrapper}>
              <input
                id="type"
                name="type"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.type}
              />
              {formik.touched.type && formik.errors.type ? (
                <div className={styles.error}>{formik.errors.type}</div>
              ) : null}
            </div>
          </div>
          <div className={styles.skills_form__input}>
            <label htmlFor="level">Skill Range:</label>
            <div className={styles.skills_input__wrapper}>
              <input
                id="level"
                name="level"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.level}
              />
              {formik.touched.level && formik.errors.level ? (
                <div className={styles.error}>{formik.errors.level}</div>
              ) : null}
            </div>
          </div>
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className={styles.skills__addSkill_button}
          >
            Add Skill
          </button>
        </form>
      )}
      <SkillBar
        skills={formattedSkills}
        colors={colors}
        barBackground="none"
        symbolColor="transparent"
      />
      <img src={require("../../assets/scale.png")} alt="scale" />
    </div>
  );
};

export default Skills;
