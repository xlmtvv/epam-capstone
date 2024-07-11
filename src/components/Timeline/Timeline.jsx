// src/features/education/Timeline.jsx
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchEducations } from "../../features/education/educationSlice";
import styles from "./Timeline.module.scss";

import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.education);

  useEffect(() => {
    dispatch(fetchEducations());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className={styles.timelineContainer}>
        <h2>Education</h2>
        <div className={styles.loadingContainer}>
          <FontAwesomeIcon icon={faArrowsRotate} spin />
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className={styles.errorContainer}>
        <p>Something went wrong; please review your server connection!</p>
      </div>
    );
  }

  return (
    <div className={styles.timelineContainer}>
      <h2>Education</h2>
      <div className={styles.timelineWrapper}>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {data.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator className={styles.connector}>
                {item.date}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <section className={styles.timeline_content}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </section>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
