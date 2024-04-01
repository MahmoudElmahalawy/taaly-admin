import React from "react";

interface FetchState<T> {
	loading: boolean;
	data: T | null;
	error: Error | null;
	fetchData: Function;
}

const useFetch = <T>(url?: string, options?: any, onSuccess?: Function, onError?: Function): FetchState<T> => {
	const [loading, setLoading] = React.useState<boolean>(true);
	const [data, setData] = React.useState<T | null>(null);
	const [error, setError] = React.useState<Error | null>(null);

	const fetchData = async (url: string) => {
		try {
			const response = await fetch(url, options);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const responseData: T = await response.json();
			setData(responseData);
			onSuccess?.(responseData);
		} catch (error: any) {
			setError(error);
			onError?.(error);
		} finally {
			setLoading(false);
		}
	};

	React.useEffect(() => {
		if (url) fetchData(url);
	}, [url]);

	return { loading, data, error, fetchData };
};

export default useFetch;
