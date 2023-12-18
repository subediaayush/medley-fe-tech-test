# Tech Test Brief

## Overview

This project contains basic implementation to replicate the look and feel of the provided Figma design file. The project was created using `create-react-app` script along with `typescript` support. 

This web app contains `styled-components` components to apply generic layout and style templates. It uses an `fetch` hook to wait for api call events and deboucer hook to prevent multiple search query dispatches while typing. All of these hooks are implemented in the app directly and no other external libaries are used to keep the assessment as fair as possible. My solution contains a generic `RemoteTable` component that tries to display the tabular data while allowing the caller component to customize display of each column.

While this solution was not a complex ReactJs challenge, it was still a refresher because it helped me focus on implementing the basic components such as styled buttons and tables which would easily be possible when implementing frameworks such as `antDesign` and `MUI`.
