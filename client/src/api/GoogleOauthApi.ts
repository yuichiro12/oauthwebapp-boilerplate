export class GoogleOauthApi {
  authInstance: any;

  constructor() {
    this.initClient();
    this.renderButton();
  }

  initClient() {
    const api = window.gapi;
    api.load('client:auth2', () => {
      api.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'profile email',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
      }).then(() => {
        this.authInstance = api.auth2.getAuthInstance();
        // Listen for sign-in state changes.
        // GoogleAuth.isSignedIn.listen(updateSigninStatus);
      });
    })
  }

  renderButton() {
    window.gapi.load('client:auth2', () => {
      window.gapi.signin2.render('google-signin', {
        scope: 'profile email',
        width: 240,
        height: 40,
        longtitle: true,
        theme: 'light',
        onsuccess: (googleUser) => console.log('Logged in as: ' + googleUser.getBasicProfile().getName()),
        onfailure: (error) => console.log(error)
      });
    });
  }
}