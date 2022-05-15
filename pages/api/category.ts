import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../utils/mongo";
import { Category } from "../../models";
import {
  createHandler,
  Post,
  Delete,
  Get,
  Query,
  Body,
  Req,
} from "@storyofams/next-api-decorators";
// import { api, ApiController } from "next-controller";
// import { Get, NextApiContext, withController } from "next-controllers";

type Data = {
  name: string;
};

class CategoryController {
  @Get()
  async fetchCategories(
    @Query("product_type") product_type: string
  ): Promise<any[]> {
    await dbConnect();

    const categories = await Category.find({
      product_type: product_type,
    });

    if (!categories) {
      // throw new NotFoundException('Category not found.');
      console.log("no");
    }

    return categories;
  }

  @Post()
  async addCategory(@Body() body: any) {
    await dbConnect();

    return await Category.create(body);
  }
}

export default createHandler(CategoryController);
