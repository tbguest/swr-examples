// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.setHeader("Cache-control", "max-age=10, stale-while-revalidate=5");
  res.status(200).json(new Date().toLocaleString());
}

// app.use(function (req, res, next) {
//   setTimeout(next, 2000);
// });
