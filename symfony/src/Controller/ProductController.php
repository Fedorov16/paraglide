<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/product", name="product")
 */

class ProductController extends AbstractController
{
    /**
     * @Route("/all", name="all")
     * @param ProductRepository $productRepository
     * @return Response
     */
    public function indexAction(ProductRepository $productRepository): Response
    {
        $products = $productRepository->findAll();
        return $this->render('product/product.html.twig', [
            'products' => $products,
        ]);
    }

    /**
     * @Route("/{id}", name="product", requirements={"id": "[0-9]+"})
     * @param ProductRepository $productRepository
     * @param Request $request
     * @return Response
     */
    public function showProductAction(ProductRepository $productRepository, Request $request): Response
    {
        $productId = $request->get('id');
        $product = $productRepository->find($productId);

        return $this->render('product/singleProduct.html.twig', [
            'product' => $product,
        ]);
    }
}
