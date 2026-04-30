-- AlterTable
ALTER TABLE "exercise" ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "food" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "servingSize" DOUBLE PRECISION NOT NULL,
    "servingUnit" TEXT NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "fats" DOUBLE PRECISION NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,
    "isCustom" BOOLEAN NOT NULL DEFAULT false,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "cuisineTag" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "cookTime" DOUBLE PRECISION,
    "prepTime" DOUBLE PRECISION,
    "calories" DOUBLE PRECISION,
    "protein" DOUBLE PRECISION,
    "fats" DOUBLE PRECISION,
    "carbs" DOUBLE PRECISION,
    "isCustom" BOOLEAN NOT NULL DEFAULT false,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_ingredient" (
    "recipeId" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recipe_ingredient_pkey" PRIMARY KEY ("recipeId","foodId")
);

-- CreateTable
CREATE TABLE "meal_log" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "occasion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "loggedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "meal_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "meal_log_item" (
    "id" TEXT NOT NULL,
    "mealLogId" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "servingQuantity" DOUBLE PRECISION NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "fats" DOUBLE PRECISION NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "meal_log_item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "food_category_idx" ON "food"("category");

-- CreateIndex
CREATE INDEX "food_name_idx" ON "food"("name");

-- CreateIndex
CREATE INDEX "food_createdById_idx" ON "food"("createdById");

-- CreateIndex
CREATE INDEX "recipe_name_idx" ON "recipe"("name");

-- CreateIndex
CREATE INDEX "recipe_category_idx" ON "recipe"("category");

-- CreateIndex
CREATE INDEX "recipe_cuisineTag_idx" ON "recipe"("cuisineTag");

-- CreateIndex
CREATE INDEX "recipe_createdById_idx" ON "recipe"("createdById");

-- CreateIndex
CREATE INDEX "meal_log_userId_idx" ON "meal_log"("userId");

-- CreateIndex
CREATE INDEX "meal_log_occasion_idx" ON "meal_log"("occasion");

-- CreateIndex
CREATE INDEX "meal_log_loggedAt_idx" ON "meal_log"("loggedAt");

-- CreateIndex
CREATE INDEX "meal_log_item_mealLogId_idx" ON "meal_log_item"("mealLogId");

-- CreateIndex
CREATE INDEX "meal_log_item_foodId_idx" ON "meal_log_item"("foodId");

-- AddForeignKey
ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "recipe_ingredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "recipe_ingredient_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal_log" ADD CONSTRAINT "meal_log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal_log_item" ADD CONSTRAINT "meal_log_item_mealLogId_fkey" FOREIGN KEY ("mealLogId") REFERENCES "meal_log"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "meal_log_item" ADD CONSTRAINT "meal_log_item_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE CASCADE ON UPDATE CASCADE;
