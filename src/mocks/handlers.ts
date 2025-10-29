import {graphql, HttpResponse} from "msw";
import { mockRepositories } from "../__tests__/mock-data";

export const handlers = [
    graphql.query("GetUser", ({variables})=> {
    // graphql.query("GetUser", ({query, variables})=> {
        // console.log("Intercepted query:", query);
        const {login} = variables;
        if(login === "request-error") {
            return HttpResponse.json({
                errors: [{message: "There was an error fetching the user data"}]
            })
        }
        if(login === "invalid-username") {
            return HttpResponse.json({
                data: {
                    user: null,
                },
                errors: [{message: `Could not find user with username: ${login}`}]
            })
        }
        return HttpResponse.json({
            data: {
                user: {
                    name: login,
                    avatarUrl: `https://example.com/images/${login}.png`,
                    bio: "This is a test bio",
                    url: `https://github.com/${login}`,
                    repositories: {
                        totalCount: 10,
                        nodes: mockRepositories,
                    },
                    followers: {
                        totalCount: 100,
                    },
                    following: {
                        totalCount: 200,
                    },
                    gists: {
                        totalCount: 300,
                    },
                }
            }
        })
    })
];