import React, { useState } from "react";

import classes from "./ProjectsTable.module.css";

const projectsData = [
  // Project Name
  {
    id: "projecOnetId",
    projectName: "Project One Name",
    projectCountry: "Germany",
    projectYear: "2023",
    projectTimeLine: "41",
    projectArea: "project Area Name",
  },
  // Project Name
  {
    id: "projecGeTwoId",
    projectName: "Some Name",
    projectCountry: "Germany",
    projectYear: "2023",
    projectTimeLine: "745",
    projectArea: "project Area Name",
  },
  // Project Name
  {
    id: "projecGeThreeId",
    projectName: "Some other Name",
    projectCountry: "Germany",
    projectYear: "2023",
    projectTimeLine: "97",
    projectArea: "project Area Name",
  },

  // Project Two Name
  {
    id: "projectTwoId",
    projectName: "Project Two Name",
    projectCountry: "UnitedKingdom",
    projectYear: "2011",
    projectTimeLine: "365",
    projectArea: "project Area Name",
  },

  // Project Three Name
  {
    id: "projectThreeId",
    projectName: "Project Three Name",
    projectCountry: "Pakistan",
    projectYear: "2020",
    projectTimeLine: "365",
    projectArea: "project Area Name",
  },

  // Project Four Name
  {
    id: "projectFourId",
    projectName: "Project Four Name",
    projectCountry: "Korea",
    projectYear: "2020",
    projectTimeLine: "15",
    projectArea: "project Area Name",
  },
];

const ProjectsTable = ({ selectedCountryId }) => {
  const [sortDirection, setSortDirection] = useState("asc");

  const sortProjects = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);

    const sorted = [...filteredProjects].sort((a, b) => {
      if (newSortDirection === "asc") {
        return a.projectYear.localeCompare(b.projectYear);
      } else {
        return b.projectYear.localeCompare(a.projectYear);
      }
    });

    setFilteredProjects(sorted);
  };

  let initialFilteredProjects = [...projectsData];
  if (selectedCountryId !== "all") {
    initialFilteredProjects = projectsData.filter(
      (project) => project.projectCountry === selectedCountryId
    );
  }

  const [filteredProjects, setFilteredProjects] = useState(
    initialFilteredProjects
  );

  function formatTimeline(days) {
    if (days < 30) {
      return `${days} days`;
    } else if (days < 365) {
      const months = Math.floor(days / 30);
      const remainingDays = days % 30;
      return `${months} month${months > 1 ? "s" : ""} ${remainingDays} days`;
    } else {
      const years = Math.floor(days / 365);
      return `${years}+ year${years > 1 ? "s" : ""}`;
    }
  }

  return (
    <div className={classes["scrollable-tbody"]}>
      <table className={classes["styled-table"]}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Project</th>
            <th>Country</th>
            <th>
              <button
                onClick={sortProjects}
                style={{ color: "white", fontSize: "1rem", fontWeight: "600" }}
              >
                Year {sortDirection === "asc" ? "△" : "▽"}
              </button>
            </th>
            <th>Duration</th>
            <th>Project Area</th>
          </tr>
        </thead>
        <tbody className={classes.tableBody}>
          {filteredProjects.map((project, index) => (
            <tr key={project.id}>
              <td>{index + 1}</td>
              <td>{project.projectName}</td>
              <td>{project.projectCountry}</td>
              <td>{project.projectYear}</td>
              <td>{formatTimeline(project.projectTimeLine)}</td>
              <td>{project.projectArea}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
