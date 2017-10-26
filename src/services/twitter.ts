import axios, { AxiosRequestConfig } from "axios";
import { action, observable, runInAction } from "mobx";
import epiClient from "../utils/twitterClient";

var headers = {
  headers: {
    Authorization:
      'OAuth oauth_consumer_key="X3lFyPVWiU3GCidBRpalSUP5m",oauth_token="373534602-DykV77uZ2SgoiySxcf7u5FniETM4tGGW2O6WA3Km",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1508977948",oauth_nonce="fx43yi",oauth_version="1.0",oauth_signature="FHZY9PJvOthSx7yO0uUkpp4vAxI%3D"'
  }
};

export const getLocationTree = (compCode: string) =>
  epiClient.get(`/subscribers/${compCode}/tree`);

const getTweets = () => {
  console.log(
    epiClient.get(
      `/statuses/user_timeline.json?screen_name='bwyarbrough'&count=2&include_rts=false`,
      headers
    )
  );
};

export default getTweets;
