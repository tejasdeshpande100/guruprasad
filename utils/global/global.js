import _ from "lodash";
import {
  charterApi,
  markInvoiceUploadApi,
  searchChatterApi,
  serachVendorApi,
  validateSlug,
  markVendorPaymentRelease,
  markMilestoneCompleteApi,
  getAssignedUsersApi,
} from "../apis.utils";
import { userAxios } from "../axios/user.axios";
import { listViewType } from "../enum";

export const getVirtualElement = function (args) {
  var { name, handleChange, handleBlur, type } = args;

  function getEvent() {
    let event = {};
    event.target = {
      type,
      name,
    };
    return event;
  }

  function setValue(value) {
    const event = getEvent();
    event.target.value = value;
    handleChange(event);
  }

  function blurElement() {
    const event = getEvent();
    if (handleBlur) {
      handleBlur(event);
    }
  }

  function resetValue() {
    const event = getEvent();
    event.target.value = "";
    handleChange(event, "");
  }

  return {
    setValue,
    blurElement,
    resetValue,
  };
};

export const formattedAddress = (
  address_line1,
  address_line2,
  city,
  country,
  state,
  zip_code
) => {
  let address = "";
  if (address_line1) {
    address += address_line1;
  }
  if (address_line2) {
    address += ", " + address_line2;
  }
  if (city) {
    address += " " + city;
  }
  if (state) {
    address += ", " + state;
  }
  if (country) {
    address += " " + country;
  }
  if (zip_code) {
    address += ", " + zip_code;
  }
  return address;
};

export const encodeValueInSlug = (title) =>
  title && title.trim().split(" ").join("-");

export const decodeSlugToValue = (slug) =>
  slug && slug.trim().split("-").join(" ");

export const validateSlugHandler = async (slug) => {
  const response = await userAxios(`${validateSlug}?slug=${slug}&type=chatter`);
  return response.data;
};

export const serachVendorHandler = async (searchSlug) => {
  const response = await userAxios(`${serachVendorApi}?query=${searchSlug}`);
  return response.data;
};

export const searchCharterHandler = async (searchSlug) => {
  const response = await userAxios(`${searchChatterApi}?query=${searchSlug}`);
  return response.data;
};

export const getCharterByIdHandler = async (charterId) => {
  const query = createQueryString({
    type: listViewType.charter,
  });
  const response = await userAxios.get(charterApi + "/" + charterId + query);
  return response.data;
};

export const createQueryString = (data) => {
  return "?" + new URLSearchParams(data).toString();
};

export const debounce = (time) => {
  return _.debounce((func) => {
    func();
  }, time);
};

export const markInvoiceUploadedHandler = (projectId, milestoneId) => {
  return userAxios.put(`${markInvoiceUploadApi}/${projectId}/${milestoneId}`);
};

export const markMilestoneCompleteHandler = (projectId, milestoneId) => {
  return userAxios.put(
    `${markMilestoneCompleteApi}/${projectId}/${milestoneId}`
  );
};

export const makeVendorReleasedHandler = (projectId, milestoneId) => {
  return userAxios.put(
    `${markVendorPaymentRelease}/${projectId}/${milestoneId}`
  );
};

export const getAllAssginedUsersHandler = (projectId) => {
  return userAxios.get(getAssignedUsersApi + "/" + projectId);
};
