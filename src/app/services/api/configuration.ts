import { environment } from 'src/environments/environment';


export class ApiConfiguration {

  protected baseUrl: string = environment.apiUrl;

  // Authorization
  readonly authUrl = 'authentication/';

  // User
  readonly usersUrl = 'users';
  readonly userRenewTokenUrl = this.usersUrl + '/renewtoken';

  readonly products = 'products';
  readonly payment = 'payment/get/payment';

  readonly teacher = 'teachers';

  readonly productsBy = 'products/by/cat/sub';
  readonly Offers = 'offers';
  readonly gallery = 'gallery';
  readonly slider = 'gallery/slider/';
  readonly allSlider = 'gallery/all/slider/';
  readonly blog = 'blog';
  readonly jobpost = this.blog + '/job'
  readonly cartDetailsPlace = '/cart/palce/not';
  readonly userInfo = this.usersUrl + '/getuseraddress/';
  readonly careerCategory = 'career/category'
  readonly coupone = 'coupone';
  readonly UpdateTrack = this.products + '/cart/UpdateTrack';
  readonly addOffline = 'addofflineorder';
  readonly addFixedData = 'fixedorder';
  readonly cart = 'cart';

  readonly getUserVideos = (id) => {
    return this.products + '/video/Sessions/' + id;
  }

  readonly login = (data) => {
    return this.usersUrl + '/' + data.email + '/password/' + data.password;
  }

  readonly galleryWithType = (type) => {
    return this.gallery + '/type/' + type;
  }

  // uploads
  readonly uploadUrl = 'uploads/';

  readonly verifyOTPUrl = this.authUrl + 'otp/verify';

  readonly verifyMobileNoUrl = (mobileNo) => {
    return this.authUrl + 'check/mobile/' + mobileNo;
  }
  readonly productsOffer = (productId) => {
    return this.products + '/maketodayoffer/' + productId;
  }
  readonly sendOTPUrl = (mobileNo) => {
    return this.authUrl + 'otp/' + mobileNo;
  }

  readonly updateUserUrl = (userId) => {
    return this.usersUrl + '/' + userId;
  }
  readonly deleteUserUrl = (userId) => {
    return this.usersUrl + '/' + userId;
  }
  readonly checkMobileExistUrl = (mobile) => {
    return this.usersUrl + '/mobile/' + mobile + '/exist';
  }

  readonly getUserUrlBy = (studentId: string) => {
    return this.usersUrl + '/' + studentId;
  }
  readonly cartDetails = (status: string, id, track) => {
    return this.products + this.cartDetailsPlace + '/' + status + '/userid/' + id + '/track/' + track;
  }




}
