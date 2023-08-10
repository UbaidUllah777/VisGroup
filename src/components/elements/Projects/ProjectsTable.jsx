import React from "react";

import classes from "./ProjectsTable.module.css";

const projectsData = [
  // Project Name
  {
    id: "projecOnetId",
    projectName: "Project One Name",
    projectCountry: "Germany",
    projectYear: "2023",
    projectTimeLine: "23",
    projectArea: "project Area Name",
  },
  // Project Name
  {
    id: "projecGeTwoId",
    projectName: "Some Name",
    projectCountry: "Germany",
    projectYear: "2023",
    projectTimeLine: "23",
    projectArea: "project Area Name",
  },
  // Project Name
  {
    id: "projecGeThreeId",
    projectName: "Some other Name",
    projectCountry: "Germany",
    projectYear: "2023",
    projectTimeLine: "23",
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
  if (selectedCountryId === "all") {
    var filteredProjects = projectsData.map((project) => {
      return project;
    });
  } else {
    filteredProjects = projectsData.filter(
      (project) => project.projectCountry === selectedCountryId
    );
  }

  return (
    <div className={classes["scrollable-tbody"]}>
      <table className={classes["styled-table"]}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Project</th>
            <th>Country</th>
            <th>Year</th>
            <th>Time Line</th>
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
              <td>{project.projectTimeLine}</td>
              <td>{project.projectArea}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
