import Product from "../models/Product.model.js";

// export const getProducts = async (req, res) => {
// try {
//     let { page = 1, limit = 12, search = "", category = "" } = req.query;
//     page = parseInt(page);
//     limit = parseInt(limit);

//     const query = {};
//     if (category) query.category = category;

//     let sort = {};
//     let filter = query;

//     if (search) {
//       filter = { ...query, $text: { $search: search } };
//       sort = { score: { $meta: "textScore" } };
//     }

//     const products = await Product.find(filter, search ? { score: { $meta: "textScore" } } : {})
//       .sort(sort)
//       .skip((page - 1) * limit)
//       .limit(limit);

//     const total = await Product.countDocuments(filter);

//     res.json({
//       products,
//       total,
//       page,
//       totalPages: Math.ceil(total / limit),
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching products" });
//   }
// };



const buildProductFilter = ({ q, category, minPrice, maxPrice, rating }) => {
  const query = {};
  const sort = {};

  if (category) query.category = category;
  if (minPrice) query.price = { ...query.price, $gte: minPrice };
  if (maxPrice) query.price = { ...query.price, $lte: maxPrice };
  if (rating) query.rating = { $gte: rating };

  if (q) {
    query.$text = { $search: q };
    sort.score = { $meta: "textScore" };
  }

  return { query, sort };
};

export const getProducts = async (req, res) => {
  try {
    let { page = 1, limit = 12, q, category, minPrice, maxPrice, rating } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const { query, sort } = buildProductFilter({ q, category, minPrice, maxPrice, rating });

    const products = await Product.find(
      query,
      q ? { score: { $meta: "textScore" } } : {}
    )
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Product.countDocuments(query);

    res.json({
      products,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" });
  }
};
