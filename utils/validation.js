import * as Yup from "yup";

export const milestoneValidationSchema = Yup.object({
  milestone_name: Yup.string().required("Milestone Name is required"),
  percentage_of_project: Yup.number()
    .typeError("Please Enter a number")
    .integer("Number Should be Integer")
    .required("Percentage Release is required")
    .min(1, "Value should be between 1 and 100")
    .max(100, "Value should be between 1 and 100"),
  milestone_amount: Yup.string().required("Milestone Amount is required"),
  milestone_release_amount: Yup.string().required(
    "Milestone Release Amount is required"
  ),
  // timeline: Yup.string().required("Timeline is required"),
  // expected_collection_month: Yup.string().required(
  //   "Collection Month is required"
  // ),
});
