import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import Footer from "@/components/footer";
import Container from '../../components/blog/container'
import PostBody from '../../components/blog/post-body'
import Header from '../../components/blog/header'
import PostHeader from '../../components/blog/post-header'
import BlogLayout from '../../components/blog/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/blog/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  const title = `${post.title} | Eye Care Blog ${CMS_NAME}`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <MenuContextProvider>
      <Layout>
        <HeaderOne />
        
    <BlogLayout preview={preview}>
      <Container>
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </BlogLayout>
    <Footer />
    </Layout>
    </MenuContextProvider>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
