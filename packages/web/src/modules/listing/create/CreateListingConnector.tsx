import React, { useMemo, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Form as AntForm, Button } from "antd";
import { Formik, Form, Field } from "formik";
import Page1 from "./ui/Page1";
import Page2 from "./ui/Page2";
import Page3 from "./ui/Page3";

interface FormValues {
  name: string;
  category: string;
  description: string;
  price: number;
  beds: number;
  guests: number;
  latitude: number;
  longitude: number;
  amenities: string[];
}

export default function CreateListingConnector(props: RouteComponentProps<{}>) {
  const { Item: FormItem } = AntForm;

  const [page, setPage] = useState<number>(0);

  const pages = useMemo(() => [<Page1 />, <Page2 />, <Page3 />], []);

  const submit = (values: any) => {
    console.log("values:", values);
  };

  const prevPage = () => setPage(page - 1);

  const nextPage = () => setPage(page + 1);

  return (
    <Formik<FormValues>
      initialValues={{
        name: "",
        category: "",
        description: "",
        price: 0,
        beds: 0,
        guests: 0,
        latitude: 0,
        longitude: 0,
        amenities: [],
      }}
      onSubmit={submit}
    >
      {() => (
        <Form>
          <div
            style={{
              display: "block",
              maxWidth: 400,
              margin: "60px auto",
              border: "1px solid #ccc",
              borderRadius: 4,
              padding: 20,
            }}
          >
            {pages[page]}
            <FormItem
              style={{
                marginBottom: 0,
              }}
            >
              {page > 0 && (
                <Button
                  type="primary"
                  onClick={prevPage}
                  style={{
                    marginRight: 10,
                  }}
                >
                  Previous Page
                </Button>
              )}
              {page === pages.length - 1 ? (
                <Button type="primary" htmlType="submit">
                  Create Listing
                </Button>
              ) : (
                <Button type="primary" onClick={nextPage}>
                  Next Page
                </Button>
              )}
            </FormItem>
          </div>
        </Form>
      )}
    </Formik>
  );
}
