import request from "/@/utils/request";

let systemInfo = {};
systemInfo.login = function (data) {
  return request({
    url: "/api/fin-services/v1/system-info/login",
    data,
    method: "post",
  });
};

export default systemInfo;
