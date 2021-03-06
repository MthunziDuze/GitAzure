'use strict';

var express = require('express');
var controller = require('./issue.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.get('/:category/categories', auth.isAuthenticated(), controller.showIssuesByCategory);
router.get('/assignedUser/:assignedUser', auth.isAuthenticated(), controller.getIssueByUser);
router.get('/date/:dateRange', controller.showJobIssuesByDate);

router.get('/issuedata', controller.issuesData);

router.get('/:status/statuses', controller.showJobIssuesByStatus);

router.get('/:category/:status', auth.isAuthenticated(), controller.searchIssues);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
