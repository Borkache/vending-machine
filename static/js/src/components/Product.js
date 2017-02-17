import React, { PropTypes } from 'react';

const Product = (
	({ product, ballance, onClick }) => (
		<div className="panel panel-default">
			<div className="panel-heading">
				Price: ${product.price}
			</div>
			<div className="panel-body">
				<img src={`http://lorempixel.com/112/160/technics/?random=${product.id}`} className="img-rounded" />
			</div>
			<div className="panel-footer">
				{product.price <= ballance ?
					<button className="btn btn-primary" onClick={() => onClick(product.id)}>Buy</button>
					:
					<button className="btn btn-default disabled">Load ${product.price - ballance} more</button>
				}
			</div>
		</div>
	)
);

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired
	}).isRequired,
	ballance: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Product;
