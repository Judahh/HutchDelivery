var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').load();
var User = require('../Model/User');
var Passport = (function () {
    function Passport() {
    }
    Passport.prototype.serializeUser = ;
    Passport.prototype.function = function (user, done) {
        done(null, user.id);
    };
    Passport.prototype.deserializeUser = ;
    Passport.prototype.function = function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    };
    Passport.prototype.use = ;
    return Passport;
})();
exports.Passport = Passport;
new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    if (email)
        email = email.toLowerCase();
    process.nextTick(function () {
        User.findOne({ 'local.email': email }, function (err, user) {
            if (err)
                return done(err);
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.'));
            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
            else
                return done(null, user);
        });
    });
});
;
use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    if (email)
        email = email.toLowerCase();
    process.nextTick(function () {
        if (!req.user) {
            User.findOne({ 'local.email': email }, function (err, user) {
                if (err)
                    return done(err);
                if (user) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                }
                else {
                    var newUser = new User();
                    newUser.local.email = email;
                    newUser.local.password = newUser.generateHash(password);
                    newUser.save(function (err) {
                        if (err)
                            return done(err);
                        return done(null, newUser);
                    });
                }
            });
        }
        else if (!req.user.local.email) {
            User.findOne({ 'local.email': email }, function (err, user) {
                if (err)
                    return done(err);
                if (user) {
                    return done(null, false, req.flash('loginMessage', 'That email is already taken.'));
                }
                else {
                    var user = req.user;
                    user.local.email = email;
                    user.local.password = user.generateHash(password);
                    user.save(function (err) {
                        if (err)
                            return done(err);
                        return done(null, user);
                    });
                }
            });
        }
        else {
            return done(null, req.user);
        }
    });
}));
use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_AUTHENTICATION_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_AUTHENTICATION_SECRET,
    callbackURL: process.env.FACEBOOK_AUTHENTICATION_CALLBACK_URL,
    passReqToCallback: true
}, function (req, token, refreshToken, profile, done) {
    process.nextTick(function () {
        if (!req.user) {
            User.findOne({ 'facebook.id': profile.id }, function (err, user) {
                if (err)
                    return done(err);
                if (user) {
                    if (!user.facebook.token) {
                        user.facebook.token = token;
                        user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                        user.facebook.email = (profile.emails[0].value || '').toLowerCase();
                        user.save(function (err) {
                            if (err)
                                return done(err);
                            return done(null, user);
                        });
                    }
                    return done(null, user);
                }
                else {
                    var newUser = new User();
                    newUser.facebook.id = profile.id;
                    newUser.facebook.token = token;
                    newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                    newUser.facebook.email = (profile.emails[0].value || '').toLowerCase();
                    newUser.save(function (err) {
                        if (err)
                            return done(err);
                        return done(null, newUser);
                    });
                }
            });
        }
        else {
            var user = req.user;
            user.facebook.id = profile.id;
            user.facebook.token = token;
            user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
            user.facebook.email = (profile.emails[0].value || '').toLowerCase();
            user.save(function (err) {
                if (err)
                    return done(err);
                return done(null, user);
            });
        }
    });
}));
use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_AUTHENTICATION_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_AUTHENTICATION_CONSUMER_SECRET,
    callbackURL: process.env.TWITTER_AUTHENTICATION_CALLBACK_URL,
    passReqToCallback: true
}, function (req, token, tokenSecret, profile, done) {
    process.nextTick(function () {
        if (!req.user) {
            User.findOne({ 'twitter.id': profile.id }, function (err, user) {
                if (err)
                    return done(err);
                if (user) {
                    if (!user.twitter.token) {
                        user.twitter.token = token;
                        user.twitter.username = profile.username;
                        user.twitter.displayName = profile.displayName;
                        user.save(function (err) {
                            if (err)
                                return done(err);
                            return done(null, user);
                        });
                    }
                    return done(null, user);
                }
                else {
                    var newUser = new User();
                    newUser.twitter.id = profile.id;
                    newUser.twitter.token = token;
                    newUser.twitter.username = profile.username;
                    newUser.twitter.displayName = profile.displayName;
                    newUser.save(function (err) {
                        if (err)
                            return done(err);
                        return done(null, newUser);
                    });
                }
            });
        }
        else {
            var user = req.user;
            user.twitter.id = profile.id;
            user.twitter.token = token;
            user.twitter.username = profile.username;
            user.twitter.displayName = profile.displayName;
            user.save(function (err) {
                if (err)
                    return done(err);
                return done(null, user);
            });
        }
    });
}));
use(new GoogleStrategy({
    clientID: process.env.GOOGLE_AUTHENTICATION_CLIENT_ID,
    clientSecret: process.env.GOOGLE_AUTHENTICATION_SECRET,
    callbackURL: process.env.GOOGLE_AUTHENTICATION_CALLBACK_URL,
    passReqToCallback: true
}, function (req, token, refreshToken, profile, done) {
    process.nextTick(function () {
        if (!req.user) {
            User.findOne({ 'google.id': profile.id }, function (err, user) {
                if (err)
                    return done(err);
                if (user) {
                    if (!user.google.token) {
                        user.google.token = token;
                        user.google.name = profile.displayName;
                        user.google.email = (profile.emails[0].value || '').toLowerCase();
                        user.save(function (err) {
                            if (err)
                                return done(err);
                            return done(null, user);
                        });
                    }
                    return done(null, user);
                }
                else {
                    var newUser = new User();
                    newUser.google.id = profile.id;
                    newUser.google.token = token;
                    newUser.google.name = profile.displayName;
                    newUser.google.email = (profile.emails[0].value || '').toLowerCase();
                    newUser.save(function (err) {
                        if (err)
                            return done(err);
                        return done(null, newUser);
                    });
                }
            });
        }
        else {
            var user = req.user;
            user.google.id = profile.id;
            user.google.token = token;
            user.google.name = profile.displayName;
            user.google.email = (profile.emails[0].value || '').toLowerCase();
            user.save(function (err) {
                if (err)
                    return done(err);
                return done(null, user);
            });
        }
    });
}));
;
