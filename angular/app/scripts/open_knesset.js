'use strict';

angular.module('app')
  .factory('OPEN_KNESSET', function($q, $http, SETTINGS) {
    var OPEN_KNESSET = {
      get_person: function(user) {
        return $q(function(resolve, reject) {
          $http.get(SETTINGS.backend + '/api/v2/person/?user_id='+user.user_id).success(function(data) {
            resolve(data.objects[0]);
          });
        });
      },
      get_committee: function (id) {
        var url = "/committee/"+id+"/"
        for (var i=0; i < OPEN_KNESSET.committees.length; i++) {
          if (OPEN_KNESSET.committees[i].absolute_url == url)
            return OPEN_KNESSET.committees[i]
        }
        return -1;
      },
      committees: [
    {
        "absolute_url": "/committee/2/", 
        "description": "\u05d1\u05d4\u05ea\u05d0\u05dd \u05dc\u05e1\u05e2\u05d9\u05e3 13 \u05dc\u05ea\u05e7\u05e0\u05d5\u05df \u05d4\u05db\u05e0\u05e1\u05ea, \u05ea\u05d7\u05d5\u05de\u05d9 \u05e2\u05e0\u05d9\u05d9\u05e0\u05d9\u05d4 \u05e9\u05dc \u05d5\u05e2\u05d3\u05ea \u05d4\u05db\u05dc\u05db\u05dc\u05d4 \u05d4\u05dd:\r\n\u05de\u05e1\u05d7\u05e8 \u05d5\u05ea\u05e2\u05e9\u05d9\u05d4; \u05d0\u05e1\u05e4\u05e7\u05d4 \u05d5\u05e7\u05d9\u05e6\u05d5\u05d1; \u05d7\u05e7\u05dc\u05d0\u05d5\u05ea \u05d5\u05d3\u05d9\u05d2; \u05ea\u05d7\u05d1\u05d5\u05e8 \u05d4 - \u05e1\u05e4\u05e0\u05d5\u05ea, \u05ea\u05e2\u05d5\u05e4\u05d4 , \u05de\u05e2\u05e8\u05db\u05ea \u05d4\u05db\u05d1\u05d9\u05e9\u05d9\u05dd, \u05ea\u05d7\u05d1\u05d5\u05e8\u05d4 \u05e6\u05d9\u05d1\u05d5\u05e8\u05d9\u05ea, \u05d4\u05e8\u05db\u05d1\u05ea \u05d5\u05d4\u05d1\u05d8\u05d9\u05d7\u05d5\u05ea \u05d1\u05d3\u05e8\u05db\u05d9\u05dd; \u05d0\u05d9\u05d2\u05d5\u05d3 \u05e9\u05d9\u05ea\u05d5\u05e4\u05d9; \u05ea\u05db\u05e0\u05d5\u05df \u05d5\u05ea\u05d9\u05d0\u05d5\u05dd \u05db\u05dc\u05db\u05dc\u05d9; \u05e4\u05d9\u05ea\u05d5\u05d7; \u05d6\u05d9\u05db\u05d9\u05d5\u05e0\u05d5\u05ea \u05d4\u05de\u05d3\u05d9\u05e0\u05d4 \u05d5\u05d0\u05e4\u05d5\u05d8\u05e8\u05d5\u05e4\u05e1\u05d5\u05ea \u05e2\u05dc \u05d4\u05e8\u05db\u05d5\u05e9; \u05e8\u05db\u05d5\u05e9 \u05d4\u05e2\u05e8\u05d1\u05d9\u05dd \u05d4\u05e0\u05e2\u05d3\u05e8\u05d9\u05dd; \u05e8\u05db\u05d5\u05e9 \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9\u05dd \u05de\u05d0\u05e8\u05e6\u05d5\u05ea \u05d4\u05d0\u05d5\u05d9\u05d1; \u05e8\u05db\u05d5\u05e9 \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9\u05dd \u05e9\u05d0\u05d9\u05e0\u05dd \u05d1\u05d7\u05d9\u05d9\u05dd; \u05e2\u05d1\u05d5\u05d3\u05d5\u05ea \u05e6\u05d9\u05d1\u05d5\u05e8\u05d9\u05d5\u05ea \u05d5\u05d1\u05d9\u05e0\u05d5\u05d9 \u05d5\u05e9\u05d9\u05db\u05d5\u05df.\r\n\r\n\u05d1\u05d4\u05ea\u05d0\u05dd \u05dc\u05ea\u05d7\u05d5\u05de\u05d9\u05dd \u05d4\u05d0\u05de\u05d5\u05e8\u05d9\u05dd \u05de\u05d8\u05e4\u05dc\u05ea \u05d5\u05e2\u05d3\u05ea \u05d4\u05db\u05dc\u05db\u05dc\u05d4 \u05d5\u05de\u05e7\u05d9\u05d9\u05de\u05ea \u05e4\u05e2\u05d9\u05dc\u05d5\u05ea \u05e2\u05e0\u05e4\u05d4, \u05d1\u05d9\u05df \u05d4\u05d9\u05ea\u05e8, \u05d1\u05e0\u05d5\u05e9\u05d0\u05d9\u05dd \u05d0\u05dc\u05d4:\r\n\u05d4\u05e6\u05e8\u05db\u05e0\u05d5\u05ea \u05d5\u05d4\u05d2\u05e0\u05ea \u05d4\u05e6\u05e8\u05db\u05df; \u05d4\u05d0\u05e0\u05e8\u05d2\u05d9\u05d4 \u05d5\u05d4\u05ea\u05e9\u05ea\u05d9\u05d5\u05ea - \u05d2\u05d6 (\u05d2\u05e4\"\u05de), \u05d2\u05d6 \u05d8\u05d1\u05e2\u05d9, \u05d3\u05dc\u05e7 \u05d5\u05d7\u05e9\u05de\u05dc; \u05d4\u05ea\u05e7\u05e9\u05d5\u05e8\u05ea - \u05d3\u05d5\u05d0\u05e8, \u05d8\u05dc\u05e4\u05d5\u05e0\u05d9\u05d4 \u05e0\u05d9\u05d9\u05d7\u05ea \u05d5\u05e0\u05d9\u05d9\u05d3\u05ea, \u05e9\u05d9\u05d3\u05d5\u05e8\u05d9 \u05d8\u05dc\u05d5\u05d5\u05d9\u05d6\u05d9\u05d4 \u05d5\u05e8\u05d3\u05d9\u05d5; \u05d4\u05d1\u05e0\u05e7\u05d0\u05d5\u05ea \u05dc\u05de\u05e9\u05e7\u05d9 \u05d4\u05d1\u05d9\u05ea; \u05d4\u05ea\u05d9\u05d9\u05e8\u05d5\u05ea; \u05de\u05d9\u05e0\u05d4\u05dc \u05de\u05e7\u05e8\u05e7\u05e2\u05d9 \u05d9\u05e9\u05e8\u05d0\u05dc; \u05de\u05d9\u05dd \u05d5\u05d1\u05d9\u05d5\u05d1; \u05d6\u05db\u05d5\u05ea \u05d9\u05d5\u05e6\u05e8\u05d9\u05dd \u05d5\u05d1\u05d9\u05ea \u05d3\u05d9\u05df \u05dc\u05ea\u05de\u05dc\u05d5\u05d2\u05d9\u05dd; \u05d4\u05d2\u05d1\u05dc\u05d9\u05dd \u05e2\u05e1\u05e7\u05d9\u05d9\u05dd; \u05d4\u05e4\u05d9\u05e7\u05d3\u05d5\u05df \u05e2\u05dc \u05de\u05db\u05dc\u05d9 \u05d4\u05de\u05e9\u05e7\u05d4 \u05d5\u05ea\u05d0\u05d2\u05d9\u05d3 \u05d4\u05de\u05d7\u05d6\u05d5\u05e8; \u05d4\u05d2\u05d1\u05dc\u05d5\u05ea \u05d4\u05e2\u05d9\u05e9\u05d5\u05df \u05d5\u05e4\u05e8\u05e1\u05d5\u05dd \u05de\u05d5\u05e6\u05e8\u05d9 \u05d4\u05d8\u05d1\u05e7.\r\n", 
        "name": "\u05d5\u05e2\u05d3\u05ea \u05d4\u05db\u05dc\u05db\u05dc\u05d4", 
        "resource_uri": "/api/v2/committee/2/"
    }, 
    {
        "absolute_url": "/committee/3/", 
        "description": "\u05e2\u05dc\u05d9\u05d9\u05d4; \u05e7\u05dc\u05d9\u05d8\u05d4; \u05d4\u05d8\u05d9\u05e4\u05d5\u05dc \u05d1\u05d9\u05d5\u05e8\u05d3\u05d9\u05dd; \u05d7\u05d9\u05e0\u05d5\u05da \u05d9\u05d4\u05d5\u05d3\u05d9 \u05d5\u05e6\u05d9\u05d5\u05e0\u05d9 \u05d1\u05d2\u05d5\u05dc\u05d4; \u05de\u05db\u05dc\u05d5\u05dc \u05d4\u05e0\u05d5\u05e9\u05d0\u05d9\u05dd \u05d4\u05e7\u05e9\u05d5\u05e8\u05d9\u05dd \u05d1\u05e2\u05e0\u05d9\u05d9\u05e0\u05d9\u05dd \u05d0\u05dc\u05d4 \u05d5\u05d4\u05e0\u05de\u05e6\u05d0\u05d9\u05dd \u05d1\u05ea\u05d7\u05d5\u05dd \u05d8\u05d9\u05e4\u05d5\u05dc\u05d5 \u05e9\u05dc \u05d4\u05de\u05d5\u05e1\u05d3 \u05dc\u05ea\u05d9\u05d0\u05d5\u05dd \u05d1\u05d9\u05df \u05de\u05de\u05e9\u05dc\u05ea \u05d9\u05e9\u05e8\u05d0\u05dc \u05dc\u05d1\u05d9\u05df \u05d4\u05d4\u05e1\u05ea\u05d3\u05e8\u05d5\u05ea \u05d4\u05e6\u05d9\u05d5\u05e0\u05d9\u05ea \u05d4\u05e2\u05d5\u05dc\u05de\u05d9\u05ea \u05d5\u05d1\u05d9\u05df \u05de\u05de\u05e9\u05dc\u05ea \u05d9\u05e9\u05e8\u05d0\u05dc \u05dc\u05d1\u05d9\u05df \u05d4\u05e1\u05d5\u05db\u05e0\u05d5\u05ea \u05d4\u05d9\u05d4\u05d5\u05d3\u05d9\u05ea.\n", 
        "name": "\u05d5\u05e2\u05d3\u05ea \u05d4\u05e2\u05dc\u05d9\u05d9\u05d4, \u05d4\u05e7\u05dc\u05d9\u05d8\u05d4 \u05d5\u05d4\u05ea\u05e4\u05d5\u05e6\u05d5\u05ea", 
        "resource_uri": "/api/v2/committee/3/"
    }, 
    {
        "absolute_url": "/committee/4/", 
        "description": "\u05e9\u05dc\u05d8\u05d5\u05df \u05de\u05e7\u05d5\u05de\u05d9; \u05d1\u05e0\u05d9\u05d9\u05df \u05e2\u05e8\u05d9\u05dd; \u05db\u05e0\u05d9\u05e1\u05d4 \u05dc\u05d9\u05e9\u05e8\u05d0\u05dc \u05d5\u05de\u05e8\u05e9\u05dd \u05d4\u05d0\u05d5\u05db\u05dc\u05d5\u05e1\u05d9\u05df; \u05d0\u05d6\u05e8\u05d7\u05d5\u05ea; \u05e2\u05d9\u05ea\u05d5\u05e0\u05d5\u05ea \u05d5\u05de\u05d5\u05d3\u05d9\u05e2\u05d9\u05df; \u05e2\u05d3\u05d5\u05ea; \u05d0\u05e8\u05d2\u05d5\u05df \u05d4\u05d3\u05ea\u05d5\u05ea \u05e9\u05dc \u05d9\u05d4\u05d5\u05d3\u05d9\u05dd \u05d5\u05e9\u05dc \u05dc\u05d0-\u05d9\u05d4\u05d5\u05d3\u05d9\u05dd; \u05de\u05e9\u05d8\u05e8\u05d4 \u05d5\u05d1\u05ea\u05d9-\u05d4\u05e1\u05d5\u05d4\u05e8; \u05d0\u05d9\u05db\u05d5\u05ea \u05d4\u05e1\u05d1\u05d9\u05d1\u05d4.\n", 
        "name": "\u05d5\u05e2\u05d3\u05ea \u05d4\u05e4\u05e0\u05d9\u05dd \u05d5\u05d4\u05d2\u05e0\u05ea \u05d4\u05e1\u05d1\u05d9\u05d1\u05d4", 
        "resource_uri": "/api/v2/committee/4/"
    }, 
    {
        "absolute_url": "/committee/5/", 
        "description": "\u05d3\u05d9\u05d5\u05e0\u05d9 \u05d5\u05e2\u05d3\u05ea \u05d4\u05d7\u05d5\u05e7\u05d4 \u05d7\u05d5\u05e7 \u05d5\u05de\u05e9\u05e4\u05d8 \u05d1\u05d4\u05e6\u05e2\u05d5\u05ea \u05d7\u05e7\u05d9\u05e7\u05d4 \u05d5\u05d4\u05db\u05e0\u05ea\u05df \u05e9\u05dc \u05d4\u05e6\u05e2\u05d5\u05ea \u05d4\u05d7\u05d5\u05e7 \u05dc\u05e9\u05dc\u05d1\u05d9 \u05e7\u05e8\u05d9\u05d0\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4, \u05e9\u05e0\u05d9\u05d4 \u05d5\u05e9\u05dc\u05d9\u05e9\u05d9\u05ea \u05d1\u05de\u05dc\u05d9\u05d0\u05ea \u05d4\u05db\u05e0\u05e1\u05ea\n", 
        "name": "\u05d5\u05e2\u05d3\u05ea \u05d4\u05d7\u05d5\u05e7\u05d4, \u05d7\u05d5\u05e7 \u05d5\u05de\u05e9\u05e4\u05d8", 
        "resource_uri": "/api/v2/committee/5/"
    }, 
    {
        "absolute_url": "/committee/6/", 
        "description": "\u05d7\u05d9\u05e0\u05d5\u05da; \u05ea\u05e8\u05d1\u05d5\u05ea; \u05de\u05d3\u05e2; \u05d0\u05de\u05e0\u05d5\u05ea; \u05e9\u05d9\u05d3\u05d5\u05e8; \u05e7\u05d5\u05dc\u05e0\u05d5\u05e2; \u05ea\u05e8\u05d1\u05d5\u05ea \u05d4\u05d2\u05d5\u05e3.\n", 
        "name": "\u05d5\u05e2\u05d3\u05ea \u05d4\u05d7\u05d9\u05e0\u05d5\u05da, \u05d4\u05ea\u05e8\u05d1\u05d5\u05ea \u05d5\u05d4\u05e1\u05e4\u05d5\u05e8\u05d8", 
        "resource_uri": "/api/v2/committee/6/"
    }, 
    {
        "absolute_url": "/committee/8/", 
        "description": "\u05de\u05d3\u05d9\u05e0\u05d9\u05d5\u05ea \u05de\u05d7\u05e7\u05e8 \u05d5\u05e4\u05d9\u05ea\u05d5\u05d7 \u05d0\u05d6\u05e8\u05d7\u05d9 \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc, \u05d8\u05db\u05e0\u05d5\u05dc\u05d5\u05d2\u05d9\u05d5\u05ea \u05de\u05ea\u05e7\u05d3\u05de\u05d5\u05ea, \u05de\u05d7\u05e7\u05e8 \u05d5\u05e4\u05d9\u05ea\u05d5\u05d7 \u05e1\u05d1\u05d9\u05d1\u05ea\u05d9, \u05de\u05d7\u05e7\u05e8 \u05de\u05d3\u05e2\u05d9 \u05d1\u05d0\u05e7\u05d3\u05de\u05d9\u05d4 \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9\u05ea \u05dc\u05de\u05d3\u05e2\u05d9\u05dd, \u05de\u05d7\u05e7\u05e8 \u05de\u05d3\u05e2\u05d9 \u05e9\u05dc\u05d0 \u05d1\u05de\u05d5\u05e1\u05d3\u05d5\u05ea \u05dc\u05d4\u05e9\u05db\u05dc\u05d4 \u05d2\u05d1\u05d5\u05d4\u05d4, \u05de\u05db\u05d5\u05e0\u05d9 \u05de\u05d7\u05e7\u05e8, \u05de\u05d3\u05e2\u05e0\u05d9\u05dd \u05e8\u05d0\u05e9\u05d9\u05d9\u05dd \u05e9\u05dc \u05db\u05dc\u05dc \u05de\u05e9\u05e8\u05d3\u05d9 \u05d4\u05de\u05de\u05e9\u05dc\u05d4, \u05de\u05d5\u05e2\u05e6\u05d4 \u05dc\u05d0\u05d5\u05de\u05d9\u05ea \u05dc\u05de\u05d7\u05e7\u05e8 \u05d5\u05e4\u05d9\u05ea\u05d5\u05d7, \u05e7\u05e8\u05e0\u05d5\u05ea \u05de\u05d7\u05e7\u05e8, \u05de\u05d9\u05d3\u05e2 \u05d5\u05de\u05d9\u05d7\u05e9\u05d5\u05d1.\n", 
        "name": "\u05d5\u05e2\u05d3\u05ea  \u05d4\u05de\u05d3\u05e2  \u05d5\u05d4\u05d8\u05db\u05e0\u05d5\u05dc\u05d5\u05d2\u05d9\u05d4", 
        "resource_uri": "/api/v2/committee/8/"
    }, 
    {
        "absolute_url": "/committee/9/", 
        "description": "\u05ea\u05e7\u05e6\u05d9\u05d1 \u05d4\u05de\u05d3\u05d9\u05e0\u05d4; \u05de\u05e1\u05d9\u05dd \u05dc\u05db\u05dc \u05e1\u05d5\u05d2\u05d9\u05d4\u05dd; \u05de\u05db\u05e1 \u05d5\u05d1\u05dc\u05d5; \u05de\u05dc\u05d5\u05d5\u05ea; \u05e2\u05e0\u05d9\u05d9\u05e0\u05d9 \u05de\u05d8\u05d1\u05e2 \u05d7\u05d5\u05e5; \u05d1\u05e0\u05e7\u05d0\u05d5\u05ea \u05d5\u05e9\u05d8\u05e8\u05d9 \u05db\u05e1\u05e3; \u05d4\u05db\u05e0\u05e1\u05d5\u05ea \u05d5\u05d4\u05d5\u05e6\u05d0\u05d5\u05ea \u05d4\u05de\u05d3\u05d9\u05e0\u05d4.\r\n", 
        "name": "\u05d5\u05e2\u05d3\u05ea \u05d4\u05db\u05e1\u05e4\u05d9\u05dd", 
        "resource_uri": "/api/v2/committee/9/"
    }, 
    {
        "absolute_url": "/committee/10/", 
        "description": "\u05e2\u05d1\u05d5\u05d3\u05d4; \u05d1\u05d9\u05d8\u05d7\u05d5\u05df \u05e1\u05d5\u05e6\u05d9\u05d0\u05dc\u05d9; \u05dc\u05e8\u05d1\u05d5\u05ea \u05de\u05e2\u05e8\u05db\u05ea \u05d4\u05d1\u05d8\u05d7\u05ea \u05d4\u05db\u05e0\u05e1\u05d4; \u05d4\u05de\u05d5\u05e1\u05d3 \u05dc\u05d1\u05d9\u05d8\u05d5\u05d7 \u05dc\u05d0\u05d5\u05de\u05d9; \u05d1\u05e8\u05d9\u05d0\u05d5\u05ea; \u05e1\u05e2\u05d3; \u05e9\u05d9\u05e7\u05d5\u05dd; \u05e0\u05db\u05d9\u05dd \u05d5\u05e9\u05d9\u05e7\u05d5\u05de\u05dd; \u05dc\u05e8\u05d1\u05d5\u05ea \u05e0\u05db\u05d9 \u05e6\u05d4\u201d\u05dc \u05d5\u05de\u05e9\u05e4\u05d7\u05d5\u05ea \u05e0\u05e4\u05d2\u05e2\u05d9 \u05de\u05dc\u05d7\u05de\u05d4 \u05d5\u05db\u05df \u05e0\u05e4\u05d2\u05e2\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd; \u05e2\u05d1\u05e8\u05d9\u05d9\u05e0\u05d9\u05dd \u05e6\u05e2\u05d9\u05e8\u05d9\u05dd; \u05d2\u05de\u05dc\u05d0\u05d5\u05ea \u05d5\u05ea\u05d2\u05de\u05d5\u05dc\u05d9\u05dd; \u05d7\u05d5\u05e7\u05ea \u05d4\u05ea\u05e9\u05dc\u05d5\u05de\u05d9\u05dd \u05dc\u05d7\u05d9\u05d9\u05dc\u05d9\u05dd \u05d5\u05dc\u05de\u05e9\u05e4\u05d7\u05d5\u05ea\u05d9\u05d4\u05dd.\n", 
        "name": "\u05d5\u05e2\u05d3\u05ea \u05d4\u05e2\u05d1\u05d5\u05d3\u05d4, \u05d4\u05e8\u05d5\u05d5\u05d7\u05d4 \u05d5\u05d4\u05d1\u05e8\u05d9\u05d0\u05d5\u05ea", 
        "resource_uri": "/api/v2/committee/10/"
    }, 
    {
        "absolute_url": "/committee/11/", 
        "description": "\u05e7\u05d9\u05d3\u05d5\u05dd \u05de\u05e2\u05de\u05d3 \u05d4\u05d0\u05e9\u05d4 \u05dc\u05e7\u05e8\u05d0\u05ea \u05e9\u05d5\u05d5\u05d9\u05d5\u05df \u05d1\u05d9\u05d9\u05e6\u05d5\u05d2; \u05d1\u05d7\u05d9\u05e0\u05d5\u05da \u05d5\u05d1\u05de\u05e2\u05de\u05d3 \u05d4\u05d0\u05d9\u05e9\u05d9, \u05d5\u05db\u05df \u05dc\u05de\u05e0\u05d9\u05e2\u05ea \u05d0\u05e4\u05dc\u05d9\u05d4 \u05d1\u05e9\u05dc \u05de\u05d9\u05df \u05d0\u05d5 \u05e0\u05d8\u05d9\u05d9\u05d4 \u05de\u05d9\u05e0\u05d9\u05ea \u05d1\u05db\u05dc \u05d4\u05ea\u05d7\u05d5\u05de\u05d9\u05dd; \u05dc\u05d4\u05e7\u05d8\u05e0\u05ea \u05e4\u05e2\u05e8\u05d9\u05dd \u05d1\u05db\u05dc\u05db\u05dc\u05d4 \u05d5\u05d1\u05e9\u05d5\u05e7 \u05d4\u05e2\u05d1\u05d5\u05d3\u05d4 \u05d5\u05dc\u05de\u05d0\u05d1\u05e7 \u05d1\u05d0\u05dc\u05d9\u05de\u05d5\u05ea \u05db\u05dc\u05e4\u05d9 \u05e0\u05e9\u05d9\u05dd.\r\n", 
        "name": "\u05d5\u05e2\u05d3\u05d4 \u05dc\u05e7\u05d9\u05d3\u05d5\u05dd \u05de\u05e2\u05de\u05d3 \u05d4\u05d0\u05d9\u05e9\u05d4 \u05d5\u05dc\u05e9\u05d5\u05d5\u05d9\u05d5\u05df \u05de\u05d2\u05d3\u05e8\u05d9", 
        "resource_uri": "/api/v2/committee/11/"
    },
    {
        "absolute_url": "/committee/12/", 
        "description": "\u05d4\u05d9\u05ea\u05e8\u05d9 \u05d4\u05db\u05e0\u05d9\u05e1\u05d4 \u05dc\u05d9\u05e9\u05e8\u05d0\u05dc \u05d5\u05d4\u05e9\u05d4\u05d9\u05d9\u05d4 \u05d1\u05d4 \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d6\u05e8\u05d9\u05dd \u05d7\u05d5\u05e7\u05d9\u05d9\u05dd \u05d5\u05d1\u05dc\u05ea\u05d9 \u05d7\u05d5\u05e7\u05d9\u05d9\u05dd \u05de\u05e2\u05e6\u05e8 \u05d5\u05d2\u05d9\u05e8\u05d5\u05e9 \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d6\u05e8\u05d9\u05dd \u05d1\u05dc\u05ea\u05d9 \u05d7\u05d5\u05e7\u05d9\u05d9\u05dd \u05d4\u05d9\u05ea\u05e8\u05d9 \u05e2\u05d1\u05d5\u05d3\u05d4 \u05d5\u05e9\u05d9\u05dc\u05d5\u05d1\u05dd \u05d1\u05e2\u05e0\u05e4\u05d9 \u05d4\u05d1\u05e0\u05d9\u05df, \u05d4\u05e1\u05d9\u05e2\u05d5\u05d3, \u05d4\u05d7\u05e7\u05dc\u05d0\u05d5\u05ea, \u05d4\u05ea\u05e2\u05e9\u05d9\u05d4 \u05d5\u05de\u05e1\u05e2\u05d3\u05e0\u05d5\u05ea \u05ea\u05e0\u05d0\u05d9\u05dd \u05e1\u05d5\u05e6\u05d9\u05d0\u05dc\u05d9\u05dd \u05d5\u05d1\u05db\u05dc\u05dc \u05d6\u05d4: \u05d1\u05e8\u05d9\u05d0\u05d5\u05ea, \u05e8\u05d5\u05d5\u05d7\u05d4, \u05d7\u05d9\u05e0\u05d5\u05da, \u05d8\u05d9\u05e4\u05d5\u05dc \u05d4\u05e8\u05e9\u05d5\u05d9\u05d5\u05ea, \u05d8\u05d9\u05e4\u05d5\u05dc \u05d4\u05e2\u05de\u05d5\u05ea\u05d5\u05ea \u05d5\u05e2\u05d5\u05d3.\n\u05d4\u05e2\u05e8\u05d4: \u05e2\u05d1\u05d5\u05d3\u05ea \u05d4\u05d5\u05d5\u05e2\u05d3\u05d4 \u05de\u05ea\u05de\u05e7\u05d3\u05ea \u05d1\u05db\u05dc \u05ea\u05d7\u05d5\u05de\u05d9 \u05e2\u05d9\u05e1\u05d5\u05e7\u05dd, \u05d4\u05df \u05d4\u05ea\u05e0\u05d0\u05d9\u05dd \u05d4\u05e1\u05d5\u05e6\u05d9\u05d0\u05dc\u05d9\u05dd \u05d5\u05d4\u05d7\u05d1\u05e8\u05ea\u05d9\u05d9\u05dd \u05d1\u05d4\u05dd \u05d4\u05dd \u05d7\u05d9\u05d9\u05dd, \u05d4\u05df \u05dc\u05d2\u05d1\u05d9 \u05d4\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d4\u05d7\u05d5\u05e7\u05d9\u05d9\u05dd \u05d5\u05d4\u05df \u05dc\u05d2\u05d1\u05d9 \u05d4\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d4\u05dc\u05d0 \u05d7\u05d5\u05e7\u05d9\u05d9\u05dd.\n", 
        "name": "\u05d5\u05e2\u05d3\u05d4 \u05de\u05d9\u05d5\u05d7\u05d3\u05ea \u05dc\u05d1\u05e2\u05d9\u05d9\u05ea \u05d4\u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d4\u05d6\u05e8\u05d9\u05dd", 
        "resource_uri": "/api/v2/committee/12/"
    }, 
    {
        "absolute_url": "/committee/15/", 
        "description": "\u05d4\u05d2\u05e0\u05d4 \u05e2\u05dc \u05d4\u05d9\u05dc\u05d3\u05d9\u05dd \u05d5\u05e7\u05d9\u05d3\u05d5\u05dd \u05de\u05e2\u05de\u05d3 \u05d4\u05d9\u05dc\u05d3\u05d9\u05dd \u05d5\u05d1\u05e0\u05d9 \u05d4\u05e0\u05d5\u05e2\u05e8, \u05d1\u05de\u05d8\u05e8\u05d4 \u05dc\u05de\u05de\u05e9 \u05d0\u05ea \u05d6\u05db\u05d5\u05d9\u05d5\u05ea\u05d9\u05d4\u05dd \u05d1\u05e8\u05d5\u05d7 \u05d4\u05d0\u05de\u05e0\u05d4 \u05d4\u05d1\u05d9\u05e0\u05dc\u05d0\u05d5\u05de\u05d9\u05ea \u05dc\u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05d4\u05d9\u05dc\u05d3, \u05dc\u05e8\u05d1\u05d5\u05ea \u05de\u05d9\u05de\u05d5\u05e9 \u05d4\u05e2\u05e7\u05e8\u05d5\u05e0\u05d5\u05ea \u05e9\u05dc \u05d8\u05d5\u05d1\u05ea \u05d4\u05d9\u05dc\u05d3, \u05d0\u05d9-\u05d0\u05e4\u05dc\u05d9\u05d4, \u05d4\u05d6\u05db\u05d5\u05ea \u05dc\u05d4\u05ea\u05e4\u05ea\u05d7\u05d5\u05ea \u05d1\u05ea\u05e0\u05d0\u05d9\u05dd \u05e0\u05d0\u05d5\u05ea\u05d9\u05dd, \u05d5\u05d6\u05db\u05d5\u05ea \u05e9\u05dc \u05d9\u05dc\u05d3\u05d9\u05dd \u05d1\u05e0\u05d9 \u05e0\u05d5\u05e2\u05e8 \u05dc\u05d4\u05e9\u05de\u05d9\u05e2 \u05d0\u05ea \u05d3\u05e2\u05ea\u05dd \u05d5\u05dc\u05d4\u05e9\u05ea\u05ea\u05e3 \u05d1\u05e2\u05e0\u05d9\u05d9\u05e0\u05d9\u05dd \u05d4\u05e0\u05d5\u05d2\u05e2\u05d9\u05dd \u05d1\u05d4\u05dd.\n", 
        "name": "\u05d5\u05e2\u05d3\u05d4 \u05dc\u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05d4\u05d9\u05dc\u05d3", 
        "resource_uri": "/api/v2/committee/15/"
    }
]
    };
    return OPEN_KNESSET;
  })
;
