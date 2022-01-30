import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { Navigate } from 'react-router-dom';
// import { googleSignIn } from './firebase';
import Input from './Input';
import { createAuction } from './firebase';
import { useWeb3React } from '@web3-react/core';

const CreateAuction = () => {
  const { account } = useWeb3React();
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    const auction = await createAuction({ ...data, account })
    return navigate(`/auctions/${auction.id}`)
  };
  if (!account) {
    return <Navigate to="/" />
  }
  return (
    <div className="h-screen flex flex-col py-12 md:px-8 px-4">
      <div>
        <Link to="/">Back to home</Link>
      </div>
      <h1 className="text-center mb-8">Create an Auction</h1>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="text-lg font-semibold mb-6">Basic Video Details</div>
            <div className="mb-4">
              <label>YouTube link</label>
              <Field
                name="youtubeLink"
                component={Input}
                type="text"
                placeholder="YouTube link"
              />
            </div>
            <div className="mb-4">
              <label>Title</label>
              <Field
                name="title"
                component={Input}
                type="text"
                placeholder="Title"
              />
            </div>
            <div className="mb-4">
              <label>Description</label>
              <Field
                name="description"
                component="textarea"
                placeholder="Description"
              />
            </div>
            <div className="mb-6">
              <label>Published on</label>
              <Field
                name="publishedOn"
                component={Input}
                placeholder="Published on"
              />
            </div>
            <div className="text-lg font-semibold mb-6">Video Statistics</div>
            <div className="mb-4">
              <label>Views count</label>
              <Field
                name="viewCount"
                component={Input}
                type="text"
                placeholder="Views count"
              />
            </div>
            <div className="mb-4">
              <label>Comments count</label>
              <Field
                name="commentCount"
                component={Input}
                type="text"
                placeholder="Comments count"
              />
            </div>
            <div className="mb-4">
              <label>Likes count</label>
              <Field
                name="likeCount"
                component={Input}
                type="text"
                placeholder="Likes count"
              />
            </div>
            <div className="mb-4">
              <label>Favorites count</label>
              <Field
                name="favoriteCount"
                component={Input}
                type="text"
                placeholder="Favorites count"
              />
            </div>
            <button
              type="submit"
              className="items-center ml-3 inline-flex py-1 text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
            >
              Create auction
            </button>
          </form>
        )}
      </Form>
      {/* <div className="text-center mb-6">
        Please log in with your Google account to view your YouTube videos.
      </div>
      <div className="text-center text-sm">
        Disclaimer: We will access your Google account to view the data of your
        YouTube videos. We will read content data about your video (title,
        description, channel, and thumbnail details) and statistical data about
        your video (view, like, favorite, and comment count). We will not access
        your account beyond reading or viewing this data within your YouTube
        videos. We will not modify your YouTube data or post on your behalf.
      </div>
      <div className="self-center flex-1 flex flex-col mt-28">
        <button
          className="items-center ml-3 inline-flex py-1 text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
          onClick={googleSignIn}
        >
          Connect to YouTube*
        </button>
      </div> */}
    </div>
  );
};

export default CreateAuction;
