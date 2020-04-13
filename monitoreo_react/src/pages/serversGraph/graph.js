import React from 'react';

const Graph = ({name, base64Image}) => (
	<div className="col-xl-6">
		<div className="card border-0 bg-dark-darker text-white mb-3">
			<div className="card-body" style={{ background: 'no-repeat bottom right', backgroundImage: 'url(/assets/img/svg/img-4.svg)', backgroundSize: 'auto 60%'}}>
				<img width="100%" src={ base64Image } alt={ name }  />
			</div>
		</div>
	</div>
)

export default Graph;