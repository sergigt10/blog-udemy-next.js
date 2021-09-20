import React, { useEffect } from "react";

const AdBanner = () => {
	useEffect(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<ins
			className="adsbygoogle"
			data-ad-client="ca-pub-6725465146144414"
			data-ad-slot="8787512006"
			data-ad-format="auto"
			data-full-width-responsive="true"
		></ins>
	);
};

export default AdBanner;
