import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import H1 from "../../components/mdx/h1";
import P from "../../components/mdx/p";

export const getStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps = async (
  ctx: GetStaticPropsContext<{ slug: string }>
) => {
  const { slug } = ctx.params!;
  const postFile = fs.readFileSync(`content/${slug}.mdx`);
  const mdxSource = await serialize(postFile, { parseFrontmatter: true });
  return {
    props: {
      source: mdxSource,
    },
    revalidate: 60,
  };
};

const PostPage = ({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>{source.frontmatter.title as string}</title>
      </Head>
      <MDXRemote
        {...source}
        components={{
          h1: H1,
          p: P,
        }}
      />
    </div>
  );
};

export default PostPage;
