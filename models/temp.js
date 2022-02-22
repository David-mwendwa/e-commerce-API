const agg = [
  {
    $match: {
      product: new ObjectId('6214fb6453f10e2a1e2f1afd'),
    },
  },
  {
    $group: {
      _id: null,
      averageRating: {
        $avg: '$rating',
      },
      numOfReviews: {
        $sum: 1,
      },
    },
  },
];
