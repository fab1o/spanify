// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.

                var name = localStorage["name"];

                if (name) {

                    var tileContent = NotificationsExtensions.TileContent.TileContentFactory.createTileSquare310x310Text09();
                    tileContent.textHeadingWrap.text = "Hello, " + name;

                    // Create a notification for the Wide310x150 tile using one of the available templates for the size.
                    var wide310x150Content = NotificationsExtensions.TileContent.TileContentFactory.createTileWide310x150Text03();
                    wide310x150Content.textHeadingWrap.text = "Hello, " + name;

                    // Create a notification for the Square150x150 tile using one of the available templates for the size.
                    var square150x150Content = NotificationsExtensions.TileContent.TileContentFactory.createTileSquare150x150Text04();
                    square150x150Content.textBodyWrap.text = "Hello, " + name;

                    // Attach the Square150x150 template to the Wide310x150 template.
                    wide310x150Content.square150x150Content = square150x150Content;

                    // Attach the Wide310x150 template to the Square310x310 template.
                    tileContent.wide310x150Content = wide310x150Content;

                    // Send the notification to the application’s tile.
                    Windows.UI.Notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileContent.createNotification());

                }

                WinJS.Application.onsettings = function (e) {

                    e.detail.applicationcommands = {

                        "privacy": { href: "privacypolicy.html", title: "Privacy Policy" }

                    };

                    WinJS.UI.SettingsFlyout.populateSettings(e);

                }

                WinJS.Application.start();

            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.onready = function (args) {

        //document.getElementById("panel").style.height = (window.innerHeight - 12) + "px";

        document.getElementById("panel").style.top = ((window.innerHeight / 2) - (WinJS.Utilities.getTotalHeight(document.getElementById("panel")) / 2)) + "px";

        document.getElementById('ad1').style.display = 'block';
        document.getElementById('ad1').style.left = (WinJS.Utilities.getPosition(document.getElementById('panel')).left - 340) + "px";
        document.getElementById('ad1').style.top = (WinJS.Utilities.getPosition(document.getElementById('panel')).top + 300) + "px";

        document.getElementById('ad1').winControl.isAutoRefreshEnabled = false;
        document.getElementById('ad1').winControl.refresh();
        document.getElementById('ad1').winControl.isAutoRefreshEnabled = true;

        document.getElementById('ad2').style.display = 'block';
        document.getElementById('ad2').style.left = (WinJS.Utilities.getPosition(document.getElementById('panel')).left - 340) + "px";
        document.getElementById('ad2').style.top = (WinJS.Utilities.getPosition(document.getElementById('panel')).top) + "px";

        document.getElementById('ad2').winControl.isAutoRefreshEnabled = false;
        document.getElementById('ad2').winControl.refresh();
        document.getElementById('ad2').winControl.isAutoRefreshEnabled = true;

        document.getElementById('ad').style.display = 'block';
        document.getElementById('ad').style.left = (WinJS.Utilities.getPosition(document.getElementById('panel')).left + WinJS.Utilities.getTotalWidth(document.getElementById('panel')) + 340) + "px";
        document.getElementById('ad').style.top = (WinJS.Utilities.getPosition(document.getElementById('panel')).top) + "px";

        document.getElementById('ad').winControl.isAutoRefreshEnabled = false;
        document.getElementById('ad').winControl.refresh();
        document.getElementById('ad').winControl.isAutoRefreshEnabled = true;

    };

    app.start();
})();



function reauthorizeForPublishPermissions(status) {

    // If successful, try publishing action again
    // else, just show error
    askForPermissions('publish_actions', function (error, response) {
        if (error) {
            //handleGenericError(error);
            var alertBox = (new Windows.UI.Popups.MessageDialog("We could not share right now. Check your connection and try again later.", "Spanify Your Name"));
            alertBox.showAsync();

            return;
        } else {
            if (response.access_token) {
                publishStatus(response, status);
            }

        }
    });

}

function publishStatus(response, status) {

    var accessToken = FB.getAccessToken();

    if (!accessToken) {
        accessToken = localStorage.getItem("fb_access_token");
    }
    //localStorage.getItem('fb_access_token')

    FB.api('me/feed', 'post',
          {
              message: "Me llamo " + status + "! Que hora es?",// Travoltify your name too:",
              link: 'http://lemonwaregames.com/spanifyyourname/',
              picture: 'http://lemonwaregames.files.wordpress.com/2014/03/1501.png', access_token: accessToken
              //object_attachment: '500428633403145'

          }, function (res) {
              if (!res || res.error || res.error_msg) {
                  //if (res.error.code == "200" || res.error.code == "2500") {
                  reauthorizeForPublishPermissions(status);
                  //}
                  return;
              } else {
                  localStorage["shared"] = true;
                  var alertBox = (new Windows.UI.Popups.MessageDialog("Facebook post was published!", "Spanify Your Name"));
                  alertBox.showAsync();
              }
              //console.log('Post Id: ' + res.id);
          });

}

function askForPermissions(scope, callback) {

    var redirectUri = 'https://www.facebook.com/connect/login_success.html';
    //var redirectUri = 'ms-app://s-1-15-2-3506610795-1741858908-76948987-2561754846-2715717695-4175178846-3542496763';

    var loginUrl = 'https://www.facebook.com/dialog/oauth'
                + '?response_type=token'
                + '&display=popup'
                + '&scope=' + encodeURIComponent(scope)
                + '&redirect_uri=' + encodeURIComponent(redirectUri)
                + '&client_id=' + FB.options('appId');

    //var loginUrl = FB.getLoginUrl({ scope: scope });

    try {

        Windows.Security.Authentication.Web.WebAuthenticationBroker.authenticateAsync(
            Windows.Security.Authentication.Web.WebAuthenticationBroker.default,
            new Windows.Foundation.Uri(loginUrl),
            new Windows.Foundation.Uri(redirectUri))
            .then(function success(result) {
                if (result.responseStatus == 2) {
                    //console.log('error: ' + result.responseerrordetail);
                    callback(new Error(result.responseerrordetail));
                    return;
                }

                var parser = document.createElement('a');
                parser.href = result.responseData;

                var qs = extractQuerystring(parser.hash.substr(1).split('&'));

                if (qs.error) {
                    // most likely user clicked don't allow
                    //console.log('error: ' + qs.error + ' : ' + qs.error_description);
                    return;
                }

                // set it as the default access token.
                FB.setAccessToken(qs.access_token);

                localStorage.setItem('fb_access_token', FB.getAccessToken());

                callback(null, qs);

            }, function error(err) {
                //console.log('Error Number: ' + err.number);
                //console.log('Error Message: ' + err.message);
                callback(new Error(err.message));
            });

    } catch (e) {
        // error launching web auth
        //console.log(e);
    }
}

function extractQuerystring(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=');
        if (p.length != 2) continue;
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}

function IsAlphaNumeric(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || e.keyCode == 32 || (e.keyCode == 8 && e.charCode != e.keyCode));
    return ret;
}