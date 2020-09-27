import React, { useMemo, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import AntForm from "antd/lib/form";
import Button from "antd/lib/button";
import { Formik, Form, FormikHelpers } from "formik";
import Page1 from "./ui/Page1";
import Page2 from "./ui/Page2";
import Page3 from "./ui/Page3";
import {
  CreateListingMutation,
  CREATE_LISTING_MUTATION,
} from "@airbnb-clone/controller";
import { useMutation } from "@apollo/client";

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

const initialValues = {
  name: "",
  category: "",
  description: "",
  price: 0,
  beds: 0,
  guests: 0,
  latitude: 0,
  longitude: 0,
  amenities: [],
};

export default function CreateListingConnector(_: RouteComponentProps<{}>) {
  const { Item: FormItem } = AntForm;
  const [page, setPage] = useState<number>(0);

  const pages = useMemo(() => [<Page1 />, <Page2 />, <Page3 />], []);
  const prevPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  const [createListingMutation] = useMutation<CreateListingMutation>(
    CREATE_LISTING_MUTATION
  );

  const submit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    await createListingMutation({ variables: values });
    setSubmitting(false);
  };

  return (
    <Formik<FormValues> initialValues={initialValues} onSubmit={submit}>
      {({ isSubmitting }) => (
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {page > 0 && (
                  <Button
                    type="primary"
                    onClick={prevPage}
                    htmlType="button"
                    style={{
                      marginRight: 10,
                    }}
                  >
                    Previous Page
                  </Button>
                )}
                {page === pages.length - 1 ? (
                  <>
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={isSubmitting}
                    >
                      Create Listing
                    </Button>
                  </>
                ) : (
                  <Button type="primary" onClick={nextPage} htmlType="button">
                    Next Page
                  </Button>
                )}
              </div>
            </FormItem>
          </div>
        </Form>
      )}
    </Formik>
  );
}
