import express from 'express';
import Ogp from '../services/Ogp';

const router = express.Router();

export const mainRouter = () => {
  router.get('/room', (req, res) => {
    const ogp = new Ogp('invite');
    res.status(200).render('index', { ...ogp });
  });

  router.get('/', (req, res) => {
    const ogp = new Ogp('default');
    res.status(200).render('index', { ...ogp });
  });
  return router;
};

/* 
ejs用ogp meta

<head prefix="og: http://ogp.me/ns#">
    <!-- ogp -->
    <meta property="og:url" content="<%= url %>" />
    <meta property="og:type" content="<%= type %>" />
    <meta property="og:title" content="<%= title %>" />
    <meta property="og:description" content="<%= description %>" />
    <meta property="og:site_name" content="<%= site_name %>" />
    <meta property="og:image" content="<%= image %>" />
    <meta name="twitter:card" content="<%= twcard %>" />
    <meta name="twitter:site" content="<%= twsite %>" />

*/
