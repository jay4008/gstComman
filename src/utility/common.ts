import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getTimeZone } from 'react-native-localize';
// import store from '../store';
// import { baseUrl } from '../utility';

export const request = async (method, url, data = {}) => {

//   console.log('baseUrl', baseUrl + url);

  let headerObj = {
    'Content-Type': 'application/json',
    // Timezone: getTimeZone(),
    // 'Timezone-Offset': moment.tz(getTimeZone()).format('Z'),
  };

  // console.log('headerObj', headerObj);

  if (method == 'upload') {
    headerObj['Content-Type'] = 'multipart/form-data';
  }

  const token = await AsyncStorage.getItem('token');
  console.log("token", token);
  if (token) {
    headerObj['Authorization'] = 'Bearer ' + token;
    console.log('Authorization', headerObj['Authorization']);
  }

  let instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 8000,
    headers: headerObj,
  });

  let base;

  // 'Authorization':this.getAuthToken()

  if (method === 'post') {
    console.log('post');
    base = instance.post(url, data);
  } else if (method === 'put') {
    base = instance.put(url, data);
  } else if (method === 'patch') {
    base = instance.patch(url, data);
  } else if (method === 'delete') {
    base = instance.delete(url);
  } else if (method === 'upload') {
    // base = RNFetchBlob.fetch('POST', config.baseUrl + url, headerObj, [
    //   {
    //     name: 'file',
    //     filename: data['fileName'],
    //     type: data['type'],
    //     data: RNFetchBlob.wrap(data['uri']),
    //   },
    // ]);

    // console.log('upload data', data);
    // try {
    //   base = RNFetchBlob.fetch('POST', config.baseUrl + url, headerObj, data);
    // } catch (error) {
    //   console.log('upload error', error);
    // }
  } else base = instance.get(url, { params: data });

  return base;
};

// getAuthToken() {
//   return this.store.selectSnapshot(AuthState.token);
// }

export const DownloadFile = async (url, method = 'GET', data = null) => {
  const { config, fs } = RNFetchBlob;
  let date = new Date();
  let PictureDir = fs.dirs.PictureDir; // this is the pictures directory. You can check the available directories in the wiki.
  console.log('feaching');
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
      notification: true,
      path:
        PictureDir +
        '/file_' +
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        '.pdf', // this is the path where your downloaded file will live in
      description: 'Downloading image.',
    },
  };
  let res;
  if (method.toUpperCase() === 'GET')
    res = await config(options).fetch(
      method,
      'https://dev-idiosys.s3-ap-southeast-1.amazonaws.com/' + url,
    );
  else
    res = await config(options).fetch(
      method,
      'https://dev-idiosys.s3-ap-southeast-1.amazonaws.com/' + url,
      data,
    );

  if (res) return true;
  else return false;
};