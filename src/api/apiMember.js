import React from "react";
import axios from "axios";
import config from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.host}/members`);

    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return await error.message;
  }
};

const create = async (payload) => {

  try {
    const result = await axios.post(`${config.host}/members`, payload);
    return result.data;
  } catch (error) {
    console.log(error);
    return await error.message;
  }
};

const createWithImage = async (payload) => {

  // const FormData = require("form-data");
  const form = new FormData();
  form.append("name", payload["dto"]["name"])
  form.append("position", payload["dto"]["position"])
  form.append("organizationId", payload["dto"]["organizationId"])
  form.append("reportsToId", payload["dto"]["reportsToId"])
  form.append("image", payload["image"])


  console.log(form);
  
  

  try {
    const result = await axios.post(`${config.host}/members/form`, form);
    return result.data;
  } catch (error) {
    console.log(error);
    return await error.message;
  }
};



const getById = async (id) => {
  try {
    const result = await axios.get(`${config.host}/members/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
    return await error.message;
  }
};

const update = async (id, payload) => {
  try {
    const result = await axios.put(`${config.host}/members/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
    return await error.message;
  }
};

const deleteMember = async (id) => {
  try {
    await axios.delete(`${config.host}/members/${id}`);
  } catch (error) {
    console.log(error);
    return await error.message;
  }
};

export default{
    list,
    create,
    createWithImage,
    getById,
    update,
    deleteMember
}