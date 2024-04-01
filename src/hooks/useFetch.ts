import React from "react";

interface FetchState<T> {
	loading: boolean;
	data: T | null;
	error: Error | null;
}

const useFetch = <T>(url: string): FetchState<T> => {
	const [loading, setLoading] = React.useState<boolean>(true);
	const [data, setData] = React.useState<T | null>(null);
	const [error, setError] = React.useState<Error | null>(null);

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const responseData: T = await response.json();
				setData(responseData);
			} catch (error: any) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { loading, data, error };
};

export default useFetch;
